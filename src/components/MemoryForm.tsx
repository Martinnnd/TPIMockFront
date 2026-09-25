import { useEffect, useRef, useState } from 'react';
import { X, MapPin, Save } from 'lucide-react';
import { eraRegistry, availableDecades } from '../eras/registry';
import { youtubeIdFromUrl } from '../youtube';
import { saveMedia, removeMedia } from '../mediaStorage';
import { categories, type Memory, type Decade } from '../types';
import type { Point } from './MemoryMap';
export default function MemoryForm({ point, decade, onCancel, onSave }: { point: Point; decade: Decade; onCancel: () => void; onSave: (m: Memory) => string | null }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleInput = useRef<HTMLInputElement>(null);
  const [file,setFile]=useState<File|null>(null);
  const [preview,setPreview]=useState('');
  const [busy,setBusy]=useState(false);
  const [youtube,setYoutube]=useState('');
  const [song,setSong]=useState('');
  const tracks=availableDecades.flatMap(d=>eraRegistry[d].content.music);
  useEffect(()=>{if(!file){setPreview('');return;}const url=URL.createObjectURL(file);setPreview(url);return()=>URL.revokeObjectURL(url);},[file]);
  const [error, setError] = useState('');
  useEffect(() => { const previous = document.activeElement as HTMLElement | null; dialog.current?.showModal(); titleInput.current?.focus(); return () => { previous?.focus(); }; }, []);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = String(data.get('title')).trim(), place = String(data.get('place')).trim(), description = String(data.get('description')).trim();
    const year = Number(data.get('year'));
    if (!title || !place || !description || !Number.isInteger(year) || year < 1970 || year > 2019) { setError('Completá los campos y elegí un año entre 1970 y 2019.'); return; }
    const youtubeId=youtube.trim()?youtubeIdFromUrl(youtube):null;
    if(youtube.trim()&&!youtubeId){setError('Pegá un enlace válido de YouTube (video, Shorts o youtu.be).');return;}
    if(file&&youtubeId){setError('Elegí un archivo o un video de YouTube. Quitá uno para continuar.');return;}
    if(busy)return;
    setBusy(true);setError('');
    const mediaId=file?crypto.randomUUID():null;
    try {
    if(file&&mediaId)await saveMedia(mediaId,file);
    const track=tracks.find(t=>t.spotifyId===song);
    const result = onSave({ id: crypto.randomUUID(), title, place, year, category: data.get('category') as Memory['category'], description, author: 'Vos', source: 'local', ...(youtubeId?{youtubeId}:{}), ...(file&&mediaId?{media:{id:mediaId,kind:file.type.startsWith('image/')?'image' as const:'video' as const,name:file.name,mime:file.type}}:{}), ...(track?{music:{title:track.title,artist:track.artist,spotifyId:track.spotifyId}}:{}), ...point });
    if (result) {setError(result);if(mediaId)await removeMedia(mediaId).catch(()=>{});}
    } catch {setError('No pudimos guardar el adjunto. Revisá el espacio disponible o probá un archivo más pequeño.');}
    finally {setBusy(false);}
  }
  return <dialog ref={dialog} className="memory-dialog" onCancel={e => { e.preventDefault(); if(!busy)onCancel(); }} onClick={e => { if (!busy && e.target === e.currentTarget) onCancel(); }} aria-labelledby="form-title">
    <div className="dialog-heading"><span className="eyebrow">UNA HISTORIA MÁS EN EL MAPA</span><button className="icon-button" disabled={busy} onClick={onCancel} aria-label="Cerrar formulario"><X size={20}/></button></div>
    <h2 id="form-title">¿Qué pasó en este lugar?</h2><p className="muted">Los pequeños recuerdos también merecen un pin.</p>
    <div className="coordinate-label"><MapPin size={16}/> Ubicación elegida: {point.lat.toFixed(4)}, {point.lng.toFixed(4)}</div>
    <form onSubmit={submit}>
      <label>Título del recuerdo<input ref={titleInput} name="title" autoFocus required maxLength={90} placeholder="Ese verano que no me olvido"/></label>
      <div className="form-row"><label>Año<input name="year" type="number" required min="1970" max="2019" defaultValue={decade + 5}/></label><label>Categoría<select name="category" defaultValue="Personales">{categories.map(c => <option key={c}>{c}</option>)}</select></label></div>
      <label>Nombre del lugar<input name="place" required maxLength={120} placeholder="Una plaza, tu barrio, aquel café…"/></label>
      <label>Tu historia<textarea name="description" required minLength={1} maxLength={1800} rows={4} placeholder="Contanos qué hace especial a este recuerdo."/></label>
      <fieldset className="attachment-fields" disabled={busy}><legend>Personalizá tu recuerdo (opcional)</legend>
      <label>Imagen o video<input type="file" accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm" onChange={e=>{const picked=e.target.files?.[0];if(!picked)return;const valid=['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm'].includes(picked.type);const limit=picked.type.startsWith('image/')?10:50;if(!valid||picked.size>limit*1024*1024){setError(`Elegí una imagen JPG, PNG, WebP o GIF (hasta 10 MB), o video MP4/WebM (hasta 50 MB).`);e.target.value='';return;}setError('');setFile(picked);}}/></label><small>Una imagen (hasta 10 MB) o un video (hasta 50 MB). Se guarda en este navegador.</small>
      {file&&<div className="attachment-preview">{file.type.startsWith('image/')?<img src={preview} alt="Vista previa del adjunto"/>:<video src={preview} controls preload="metadata"/>}<span>{file.name}</span><button type="button" className="secondary-button" onClick={()=>{setFile(null);const input=dialog.current?.querySelector<HTMLInputElement>('input[type=file]');if(input)input.value='';}}>Quitar adjunto</button></div>}
      <label>Video de YouTube<input type="url" value={youtube} onChange={e=>setYoutube(e.target.value)} placeholder="https://www.youtube.com/watch?v=…"/></label><small>Usá un enlace de YouTube en lugar de subir un archivo. {youtubeIdFromUrl(youtube) ? 'Enlace reconocido.' : 'Se reproduce al abrir el video.'}</small>
      <label>Canción del recuerdo<select value={song} onChange={e=>setSong(e.target.value)}><option value="">Sin música</option>{availableDecades.map(d=><optgroup key={d} label={eraRegistry[d].content.introduction.label}>{eraRegistry[d].content.music.map(t=><option key={t.spotifyId} value={t.spotifyId}>{t.title} — {t.artist}</option>)}</optgroup>)}</select></label><small>El tema y el artista aparecerán arriba del post. Cada persona puede abrir la canción y darle play en Spotify.</small>
      </fieldset>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="local-note">Se guarda solo en este navegador. No se comparte con otros dispositivos.</p>
      <div className="dialog-actions"><button type="button" className="secondary-button" disabled={busy} onClick={onCancel}>Cancelar</button><button className="primary-button" type="submit" disabled={busy}><Save size={17}/> {busy ? 'Guardando…' : 'Guardar recuerdo'}</button></div>
    </form>
  </dialog>;
}
