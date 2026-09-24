import { BatteryFull, Music2, Signal, Wifi } from 'lucide-react';
import PlayerFrame from '../shared/PlayerFrame';
import type { PlayerViewProps } from '../contracts';
import { theme } from './theme';
export default function Player(props:PlayerViewProps){return <PlayerFrame {...props} title={theme.musicTitle} label="MÚSICA"><><div className="phone-earpiece"><i/></div><div className="phone-screen"><div className="phone-status"><Signal size={10}/><span>3G</span><Wifi size={10}/><span>9:41</span><BatteryFull size={14}/></div><div className="phone-app-title">Ahora suena</div><div className="phone-album"><Music2 size={44}/><span>NOSTALGIA MIX</span><small>2010 — 2019</small></div></div></></PlayerFrame>;}
