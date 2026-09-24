import { Feather, Plus } from 'lucide-react';
import type { ProfileIdentityProps } from '../contracts';
export default function ProfileIdentity({onAdd}: ProfileIdentityProps) {
 return <><div className="profile-edition"><span>EDICIÓN PERSONAL · 1970—1979</span><span>UN EJEMPLAR PARA VOLVER A LEER</span></div><div className="profile-masthead">El diario de mi vida<small>PERSONAS, LUGARES Y RECUERDOS QUE MERECEN QUEDAR</small></div><div className="profile-portrait" aria-hidden="true"><Feather size={48}/><span>EL AUTOR</span></div><div className="personal-identity"><span className="eyebrow">RETRATO DE UN NOSTÁLGICO</span><h2>Mi perfil</h2><p>Hay historias que no salen en los diarios.<br/>Hasta que alguien se anima a contarlas.</p><small>Por Visitante · Archivo personal</small></div><button className="primary-button" onClick={onAdd}><Plus size={17}/>Escribir un recuerdo</button></>;
}
