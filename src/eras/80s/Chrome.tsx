import type { ChromeProps } from '../contracts';
import { theme } from './theme';
export default function Chrome({ period, count, view }: ChromeProps) {
  const label = period.year ?? `${period.decade}–${period.decade + 9}`;
  if (view === 'map') return <div className="era-chrome commodore-chrome">
    <div className="era-shell-top"><span>COMMODORE 64 · NOSTALGIA BASIC V2</span><span>64K RAM SYSTEM</span></div>
    <div className="commodore-bezel" aria-hidden="true"/>
    <div className="commodore-console" aria-hidden="true"><span className="commodore-name">commodore <b>64</b><i/></span><span className="commodore-ready">READY. ▉ &nbsp; {count} RECUERDOS / {label}</span><div className="commodore-keys">{['F1','F3','F5','F7','RETURN'].map(key => <span key={key}>{key}</span>)}</div><span className="commodore-power"><i/> POWER</span></div>
  </div>;
  return <div className="era-chrome"><div className="era-shell-top"><span className="shell-caption">{theme.windowTitle}</span><span className="vhs-signal" aria-hidden="true">SP <i/> TRACKING ━━━</span></div><div className="era-atmosphere" aria-hidden="true"><div className="vhs-horizon"/><span className="vhs-tape">ARGENTINA<br/>CINTA {label}</span></div><div className="vhs-status" aria-hidden="true"><span>HI-FI STEREO</span><span>✦ {count.toString().padStart(2,'0')} RECUERDOS · {label} ✦</span><span>VHS / NOSTALGIA</span></div></div>;
}
