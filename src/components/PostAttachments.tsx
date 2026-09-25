import { useEffect, useId, useRef, useState } from 'react';
import { Music2, X } from 'lucide-react';
import type { Memory } from '../types';
import { readMedia } from '../mediaStorage';
export function PostMusic({music}: {music: Memory['music']}) {
 const [open,setOpen]=useState(false); const root=useRef<HTMLDivElement>(null); const id=useId();
 useEffect(()=>{const stop=(e:Event)=>{if((e as CustomEvent).detail!==id)setOpen(false);};window.addEventListener('nostalgia-play',stop);return()=>window.removeEventListener('nostalgia-play',stop);},[id]);
 useEffect(()=>{if(!open||!root.current)return;const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)setOpen(false);});observer.observe(root.current);return()=>observer.disconnect();},[open]);
 if(!music)return null;
 return <div className="post-music" ref={root}><button type="button" className="post-music-label" aria-expanded={open} onClick={()=>{if(!open)window.dispatchEvent(new CustomEvent('nostalgia-play',{detail:id}));setOpen(!open);}}><Music2 size={15}/><span><strong>{music.title}</strong><small>{music.artist}</small></span>{open ? <X size={14}/> : <span className="post-music-play">Escuchar</span>}</button>{open&&<div className="post-music-embed"><iframe title={`Escuchar ${music.title} de ${music.artist}`} src={`https://open.spotify.com/embed/track/${music.spotifyId}?utm_source=generator&theme=0`} height="152" width="100%" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/><small>Dale play en Spotify. La reproducción puede ser una vista previa. <a href={`https://open.spotify.com/track/${music.spotifyId}`} target="_blank" rel="noreferrer">Abrir canción</a></small></div>}</div>;
}
export function PostMedia({memory}: {memory:Memory}) {
 const [url,setUrl]=useState('');const [failed,setFailed]=useState(false);const video=useRef<HTMLVideoElement>(null);const id=useId();
 useEffect(()=>{let active=true;let objectUrl='';setUrl('');setFailed(false);if(memory.media)readMedia(memory.media.id).then(blob=>{if(!active)return;if(!blob){setFailed(true);return;}objectUrl=URL.createObjectURL(blob);setUrl(objectUrl);}).catch(()=>{if(active)setFailed(true);});return()=>{active=false;if(objectUrl)URL.revokeObjectURL(objectUrl);};},[memory.media?.id]);
 useEffect(()=>{const el=video.current;if(!el)return;const stop=(e:Event)=>{if((e as CustomEvent).detail!==id)el.pause();};const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)el.pause();});observer.observe(el);window.addEventListener('nostalgia-play',stop);return()=>{observer.disconnect();el.pause();window.removeEventListener('nostalgia-play',stop);};},[url,id,memory.video]);
 if(memory.youtubeId)return <YouTubeAttachment key={memory.youtubeId} memory={memory}/>;
 if(!memory.media&&!memory.image&&!memory.video)return null;
 if(failed)return <p className="post-media-unavailable">No se pudo cargar el adjunto en este navegador.</p>;
 const source=memory.media?url:(memory.video||memory.image);
 if(!source)return <p className="post-media-unavailable">Cargando adjunto…</p>;
 return <figure className="post-media">{memory.media?.kind==='video'||memory.video?<video ref={video} src={source} controls playsInline preload="metadata" aria-label={`Video: ${memory.title}`} onPlay={()=>window.dispatchEvent(new CustomEvent('nostalgia-play',{detail:id}))} onError={()=>setFailed(true)}/>:<img src={source} alt={memory.title} loading="lazy" onError={()=>setFailed(true)}/>}{memory.mediaCaption&&<figcaption>{memory.mediaCaption}</figcaption>}</figure>;
}

function YouTubeAttachment({memory}:{memory:Memory}) {
 const [open,setOpen]=useState(false);const root=useRef<HTMLElement>(null);const id=useId();
 useEffect(()=>{const stop=(e:Event)=>{if((e as CustomEvent).detail!==id)setOpen(false);};window.addEventListener('nostalgia-play',stop);return()=>window.removeEventListener('nostalgia-play',stop);},[id]);
 useEffect(()=>{if(!open||!root.current)return;const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)setOpen(false);});observer.observe(root.current);return()=>observer.disconnect();},[open]);
 return <figure className="post-media post-youtube" ref={root}>{open?<><iframe title={`YouTube: ${memory.title}`} src={`https://www.youtube-nocookie.com/embed/${memory.youtubeId}?playsinline=1&rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/><button className="secondary-button" onClick={()=>setOpen(false)}>Cerrar video de YouTube</button></>:<button className="youtube-preview" onClick={()=>{window.dispatchEvent(new CustomEvent('nostalgia-play',{detail:id}));setOpen(true);}}><img src={`https://i.ytimg.com/vi/${memory.youtubeId}/hqdefault.jpg`} alt="" loading="lazy"/><span>▶ Abrir video de YouTube</span></button>}<figcaption>{memory.mediaCaption&&<span>{memory.mediaCaption} </span>}<a href={`https://www.youtube.com/watch?v=${memory.youtubeId}`} target="_blank" rel="noreferrer">Ver en YouTube</a><small>Si el autor no permite insertarlo, abrilo en YouTube.</small></figcaption></figure>;
}
