import { ArrowLeft, Globe2, Maximize2, Minus, Monitor, Plus, Users, X } from 'lucide-react';
import type { Decade } from '../../types';
interface Props { decade: Decade; maximized: boolean; canBack: boolean; onBack: () => void; onClose: () => void; onMaximize: () => void; onAdd: () => void }
export default function FeedWindowChrome({ decade, maximized, canBack, onBack, onClose, onMaximize, onAdd }: Props) {
  const xp = decade === 2000;
  return <div className="feed-window-chrome">
    <div className="feed-window-title"><span>{xp ? <Users size={16}/> : <Monitor size={16}/>}<strong>{xp ? 'Nostalgia Messenger — Mis espacios' : 'Explorador de recuerdos — Feed'}</strong></span><div className="feed-window-actions"><button onClick={onClose} aria-label="Minimizar feed"><Minus size={12}/></button><button onClick={onMaximize} aria-label={maximized ? 'Restaurar ventana del feed' : 'Maximizar feed'} aria-pressed={maximized}><Maximize2 size={12}/></button><button onClick={onClose} aria-label="Cerrar feed y volver al mapa"><X size={14}/></button></div></div>
    <div className="feed-window-toolbar" role="group" aria-label="Herramientas del feed"><button onClick={onBack} disabled={!canBack}><ArrowLeft size={16}/>Atrás</button><button onClick={onAdd}><Plus size={16}/>Nuevo recuerdo</button><button onClick={onClose}><Globe2 size={16}/>Ver mapa</button></div>
    <div className="feed-address"><span>{xp ? 'Dirección' : 'Carpeta'}</span><span className="feed-address-path">{xp ? 'nostalgia.local / mis espacios / novedades' : 'Mi PC / Mis recuerdos / Publicaciones'}</span></div>
    {xp && <div className="messenger-welcome"><span className="messenger-user"><Users size={23}/><i/></span><div><strong>Tu espacio, tus recuerdos</strong><small>Compartiendo esos días · Demo local</small></div><span className="messenger-era">2000s</span></div>}
  </div>;
}
