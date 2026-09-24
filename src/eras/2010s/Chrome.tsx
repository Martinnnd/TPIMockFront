import { Globe2 } from 'lucide-react';
import type { ChromeProps } from '../contracts';
export default function Chrome({period,count,onNavigate}:ChromeProps){return <div className="era-chrome"><div className="era-shell-top"><span className="shell-caption"><Globe2 size={14}/>nostalgia · historias que nos conectan</span><button className="network-home" onClick={()=>onNavigate('map')}>Inicio</button></div><footer className="network-footer"><span>Nostalgia © 2010s · Demo local</span><span>{count} recuerdos · {period.year ?? '2010—2019'}</span></footer></div>;}
