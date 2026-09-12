import { useEffect, useRef } from 'react';
import { BookOpen, CassetteTape, FolderOpen, Gamepad2, Globe2, Map, Monitor, Music2, Newspaper, Radio, Sparkles, Users } from 'lucide-react';
import type { Decade, Period } from '../types';
import { eraThemes } from '../themes';

type Destination = 'map' | 'stories' | 'facts' | 'music';
export function EraIcon({ decade, destination, size = 21 }: { decade: Decade; destination: Destination; size?: number }) {
  const icons = decade === 1980 ? { map: Gamepad2, stories: CassetteTape, facts: Sparkles, music: Radio }
    : decade === 1990 ? { map: Monitor, stories: FolderOpen, facts: Newspaper, music: Music2 }
    : { map: Globe2, stories: Users, facts: BookOpen, music: Music2 };
  const Icon = icons[destination];
  return <Icon size={size} aria-hidden="true"/>;
}

export default function EraChrome({ period, count, panelOpen, musicOpen, onNavigate }: {
  period: Period; count: number; panelOpen: boolean; musicOpen: boolean; onNavigate: (destination: Destination) => void;
}) {
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => { menu.current?.hidePopover(); }, [period.decade]);
  const theme = eraThemes[period.decade];
  const periodLabel = period.year ?? `${period.decade}–${period.decade + 9}`;
  function navigate(destination: Destination) { menu.current?.hidePopover(); onNavigate(destination); }
  return <div className="era-chrome">
    <div className="era-shell-top">
      <span className="shell-caption"><EraIcon decade={period.decade} destination="map" size={14}/>{theme.windowTitle}</span>
      {period.decade === 1980 ? <span className="vhs-signal" aria-hidden="true">SP <i/> TRACKING ━━━</span> : <div className="shell-actions"><button onClick={() => navigate('facts')} aria-label="Abrir datos desde la barra de título" title="Datos de época">?</button><button onClick={() => navigate('map')} aria-label="Minimizar paneles y ver el mapa" title="Minimizar paneles">_</button></div>}
    </div>
    <div className="era-atmosphere" aria-hidden="true"><div className="vhs-horizon"/><span className="vhs-tape">ARGENTINA<br/>CINTA {periodLabel}</span></div>
    {period.decade === 1980 ? <div className="vhs-status" aria-hidden="true"><span>HI-FI STEREO</span><span>✦ {count.toString().padStart(2, '0')} RECUERDOS · {periodLabel} ✦</span><span>VHS / NOSTALGIA</span></div> : <>
      <footer className="system-taskbar" aria-label="Barra de tareas">
        <button className="start-button" popoverTarget="era-start-menu"><span className="system-logo" aria-hidden="true"><i/><i/><i/><i/></span>{period.decade === 1990 ? 'Inicio' : 'Mis espacios'}</button>
        <span className="taskbar-separator"/>
        <button className={!panelOpen ? 'task-active' : ''} onClick={() => navigate('map')}><Map size={14}/>Argentina</button>
        <button className={panelOpen ? 'task-active' : ''} onClick={() => navigate('stories')}><FolderOpen size={15}/>{period.decade === 1990 ? 'Mis recuerdos' : 'Messenger'}</button>
        <button className={musicOpen ? 'task-active' : ''} onClick={() => navigate('music')}><Music2 size={14}/>Mi música</button>
        <span className="system-tray"><span className="connection-dot"/> {count} recuerdos<span className="tray-year">{periodLabel}</span></span>
      </footer>
      <div ref={menu} popover="auto" id="era-start-menu" className={`start-menu start-menu-${period.decade}`}>
        <div className="start-menu-brand">{period.decade === 1990 ? 'Nostalgia 95' : 'Nostalgia Messenger'}<small>Tu memoria tiene un lugar.</small></div>
        <nav aria-label="Menú de inicio">{([['map', 'Explorar Argentina'], ['stories', 'Abrir mis recuerdos'], ['facts', 'Descubrir la época'], ['music', 'Escuchar mi música']] as const).map(([destination, title]) => <button key={destination} onClick={() => navigate(destination)}><EraIcon decade={period.decade} destination={destination}/><span>{title}</span></button>)}</nav>
        <div className="start-menu-footer">UNLaM · Demo local</div>
      </div>
    </>}
  </div>;
}
