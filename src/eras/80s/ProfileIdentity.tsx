import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { ProfileIdentityProps } from '../contracts';
const characters = [{name:'Explorador',color:'#59f4f0'},{name:'Soñador',color:'#ff79d9'},{name:'Cronista',color:'#ffd877'}];
export default function ProfileIdentity({onAdd}: ProfileIdentityProps) {
 const [character,setCharacter]=useState(0);
 return <><div className="profile-game-banner"><span>PLAYER SELECT</span><span>1P · ARCHIVO PERSONAL</span></div><div className="profile-portrait" style={{'--character-color':characters[character].color} as React.CSSProperties} aria-label={`Personaje: ${characters[character].name}`}><svg viewBox="0 0 16 20" aria-hidden="true" shapeRendering="crispEdges"><path fill="currentColor" d="M5 1h6v2h2v7h-2v2H5v-2H3V3h2z M4 12h8v2h2v4h-3v-3H5v3H2v-4h2z M5 18h3v2H4v-2z M9 18h3v2H9z"/><path fill="#170d2a" d="M5 5h2v2H5z M9 5h2v2H9z M6 9h4v1H6z"/></svg><span>{characters[character].name}</span></div><div className="personal-identity"><span className="eyebrow">TU HISTORIA ES LA PARTIDA</span><h2>Mi perfil</h2><p>Visitante <span className="arcade-ready">· READY</span></p><div className="character-picker" role="group" aria-label="Elegir personaje">{characters.map((item,index)=><button key={item.name} onClick={()=>setCharacter(index)} aria-pressed={index===character}>{item.name}</button>)}</div><small>Elegí tu personaje y dejá tu huella en el mapa.</small></div><button className="primary-button" onClick={onAdd}><Plus size={17}/>Nuevo recuerdo</button></>;
}
