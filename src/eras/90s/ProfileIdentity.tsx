import { Monitor, Plus, UserRound } from 'lucide-react';
import type { ProfileIdentityProps } from '../contracts';
export default function ProfileIdentity({onAdd}: ProfileIdentityProps) {
 return <><div className="profile-properties-title"><span><Monitor size={15}/>Propiedades de Visitante</span><span aria-hidden="true">▣</span></div><div className="profile-properties-tab"><span>General</span><span>Mi archivo personal</span></div><div className="profile-portrait" aria-hidden="true"><UserRound size={48}/><span>USUARIO</span></div><div className="personal-identity"><span className="eyebrow">MI PC / USUARIOS / VISITANTE</span><h2>Mi perfil</h2><p>Visitante</p><dl className="profile-system-info"><div><dt>Tipo:</dt><dd>Archivo de recuerdos</dd></div><div><dt>Ubicación:</dt><dd>Este navegador</dd></div><div><dt>Contenido:</dt><dd>Una vida por contar</dd></div></dl></div><button className="primary-button" onClick={onAdd}><Plus size={17}/>Crear un recuerdo</button></>;
}
