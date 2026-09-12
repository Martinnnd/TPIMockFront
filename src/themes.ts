import type { Decade } from './types';

// The content and controls stay shared; typography, chrome and materials
// belong to a single era, defined here and in themes.css.
export const eraThemes: Record<Decade, { brand: string; subtitle: string; windowTitle: string; storiesTitle: string; factsTitle: string; musicTitle: string }> = {
  1970: { brand: 'Nostalgia', subtitle: 'CRÓNICAS DE UNA DÉCADA INOLVIDABLE', windowTitle: 'La revista de nuestros recuerdos', storiesTitle: 'Crónicas & correspondencia', factsTitle: 'Cultura / Archivo de época', musicTitle: 'La discoteca / Selección musical' },
  1980: { brand: 'NOSTALGIA', subtitle: 'VIDEO CLUB · REBOBINÁ TUS RECUERDOS', windowTitle: 'VHS / ARCHIVO DE RECUERDOS', storiesTitle: 'MEMORY SELECT / HISTORIAS', factsTitle: 'FLASHBACK / ARCHIVO CULTURAL', musicTitle: 'STEREO / LADO A' },
  1990: { brand: 'Nostalgia 95', subtitle: 'Mi PC > Argentina > Mis recuerdos', windowTitle: 'Nostalgia 95 — Explorador de recuerdos', storiesTitle: 'Mis recuerdos — Explorador', factsTitle: 'Datos de época — Bloc de notas', musicTitle: 'Reproductor multimedia' },
  2000: { brand: 'nostalgia', subtitle: 'Mi estado: volviendo a esos días', windowTitle: 'Nostalgia — Internet Explorer', storiesTitle: 'Mis recuerdos — Nostalgia Messenger', factsTitle: 'La época — Internet Explorer', musicTitle: 'Mi música · Compartiendo recuerdos' },
};
