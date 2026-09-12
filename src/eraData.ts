import type { Decade, Period } from './types';
export interface MusicTrack { title: string; artist: string; year: number; spotifyId: string; reference: string }
// Año del álbum original, no de una reedición ni del videoclip.
export const musicByDecade: Record<Decade, MusicTrack[]> = {
  1970: [
    { title: 'Dancing Queen', artist: 'ABBA', year: 1976, spotifyId: '01topnfXJFjW4iQMVAXAo8', reference: 'https://open.spotify.com/track/01topnfXJFjW4iQMVAXAo8' },
    { title: 'Bohemian Rhapsody', artist: 'Queen', year: 1975, spotifyId: '1yslmgUcM2AOkOPS4sl3QV', reference: 'https://open.spotify.com/track/1yslmgUcM2AOkOPS4sl3QV' },
  ],
  1980: [
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", year: 1987, spotifyId: '5r9AgnhkPQXeKG1w5rauDq', reference: 'https://open.spotify.com/track/5r9AgnhkPQXeKG1w5rauDq' },
    { title: 'Welcome to the Jungle', artist: "Guns N' Roses", year: 1987, spotifyId: '5NIPsWpDjJTFBoPxCUUeXp', reference: 'https://open.spotify.com/track/5NIPsWpDjJTFBoPxCUUeXp' },
  ],
  1990: [
    { title: 'Black or White', artist: 'Michael Jackson', year: 1991, spotifyId: '6bsCZtBsAvu4u2ueA7saDo', reference: 'https://open.spotify.com/track/6bsCZtBsAvu4u2ueA7saDo' },
    { title: 'De música ligera', artist: 'Soda Stereo', year: 1990, spotifyId: '5jVvwEH4nsTrDf2pU3IW2i', reference: 'https://open.spotify.com/track/5jVvwEH4nsTrDf2pU3IW2i' },
  ],
  2000: [
    { title: 'In the End', artist: 'Linkin Park', year: 2000, spotifyId: '60a0Rd6pjrkxjPbaKzXjfq', reference: 'https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq' },
    { title: 'Clocks', artist: 'Coldplay', year: 2002, spotifyId: '0BCPKOYdS2jbQ8iyB56Zns', reference: 'https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns' },
  ],
};
export interface EraFact { id: string; year: number; kind: 'Cine' | 'Música' | 'Acontecimientos' | 'Tecnología' | 'Deportes'; title: string; description: string; dateLabel: string; scope: string; source: string; sourceName: string }
// Verificados el 12/09/2026. No tienen coordenadas: la cultura internacional
// no se convierte en un pin argentino si el hecho ocurrió en otro país.
export const eraFacts: EraFact[] = [
  { id: 'starwars', year: 1977, kind: 'Cine', title: 'Una galaxia llegó a las salas', description: 'Star Wars se estrenó el 25 de mayo de 1977 en Estados Unidos. La aventura de Luke, Leia y Han sería conocida más tarde como Una nueva esperanza. Esta fecha corresponde al estreno original, no al argentino.', dateLabel: 'Estreno original · 1977', scope: 'Cultura internacional', source: 'https://www.starwars.com/films/star-wars-episode-iv-a-new-hope', sourceName: 'Star Wars · sitio oficial' },
  { id: 'voyager', year: 1977, kind: 'Tecnología', title: 'Dos viajeras rumbo a los planetas', description: 'Las sondas Voyager 2 y Voyager 1 despegaron en agosto y septiembre de 1977. Comenzaba un viaje de exploración de los planetas exteriores que llevaría instrumentos y cámaras mucho más allá de la Tierra.', dateLabel: 'Agosto y septiembre · 1977', scope: 'Estados Unidos · Exploración espacial', source: 'https://science.nasa.gov/mission/voyager/fact-sheet/', sourceName: 'NASA' },
  { id: 'arrival', year: 1976, kind: 'Música', title: 'ABBA invitó a todos a bailar', description: 'Arrival apareció en Suecia en octubre de 1976. El álbum incluye Dancing Queen y Knowing Me, Knowing You, canciones que quedaron asociadas al sonido pop de los setenta.', dateLabel: 'Publicación del álbum · 1976', scope: 'Cultura internacional', source: 'https://abbasite.com/articles/in-focus-arrival-the-making-of-a-classic-pop-album/', sourceName: 'ABBA · sitio oficial' },
  { id: 'bttf', year: 1985, kind: 'Cine', title: 'Un DeLorean nos llevó al futuro', description: 'Volver al futuro llegó al cine en 1985. Marty McFly viaja a 1955 y tiene que encontrar la forma de regresar. La fecha corresponde al estreno original en Estados Unidos, no al estreno argentino.', dateLabel: 'Estreno original · 1985', scope: 'Cultura internacional', source: 'https://amblin.com/movie/back-to-the-future/', sourceName: 'Amblin' },
  { id: 'democracy', year: 1983, kind: 'Acontecimientos', title: 'Argentina recuperó la democracia', description: 'El 10 de diciembre de 1983 asumió Raúl Alfonsín y comenzó una nueva etapa democrática, después de la última dictadura cívico-militar.', dateLabel: '10 de diciembre de 1983', scope: 'Argentina', source: 'https://www.argentina.gob.ar/noticias/10-de-diciembre-dia-de-la-restauracion-de-la-democracia-2', sourceName: 'Argentina.gob.ar' },
  { id: 'appetite', year: 1987, kind: 'Música', title: 'El debut de los Guns', description: 'Appetite for Destruction se publicó en 1987. En ese álbum ya estaban Sweet Child O’ Mine y Welcome to the Jungle: dos temas para volver a los ochenta.', dateLabel: 'Publicación del álbum · 1987', scope: 'Cultura internacional', source: 'https://open.spotify.com/track/5NIPsWpDjJTFBoPxCUUeXp', sourceName: 'Spotify · créditos del álbum' },
  { id: 'toystory', year: 1995, kind: 'Cine', title: 'Los juguetes cobraron vida', description: 'Toy Story se estrenó en 1995 y fue el primer largometraje animado íntegramente por computadora. Woody y Buzz inauguraron una nueva etapa para Pixar y el cine de animación.', dateLabel: 'Estreno original · 1995', scope: 'Cultura internacional', source: 'https://thewaltdisneycompany.com/news/toy-story-pixar-history/', sourceName: 'The Walt Disney Company' },
  { id: 'web', year: 1993, kind: 'Tecnología', title: 'La Web se abrió al mundo', description: 'El 30 de abril de 1993, el CERN puso el software de la World Wide Web en el dominio público. Un paso decisivo para que cualquiera pudiera usarlo y desarrollar la Web.', dateLabel: '30 de abril de 1993', scope: 'CERN · Suiza', source: 'https://home.cern/science/computing/the-birth-of-the-web/', sourceName: 'CERN' },
  { id: 'dangerous', year: 1991, kind: 'Música', title: 'Michael Jackson lanzó Dangerous', description: 'En noviembre de 1991 llegó Dangerous, el álbum que incluye Black or White. En nuestra selección de los noventa podés volver a escuchar ese tema.', dateLabel: 'Noviembre de 1991', scope: 'Cultura internacional', source: 'https://www.michaeljackson.com/albums/dangerous/', sourceName: 'Michael Jackson · sitio oficial' },
  { id: 'shrek', year: 2001, kind: 'Cine', title: 'Un ogro se robó la película', description: 'Shrek llegó al cine en 2001. DreamWorks convirtió a un ogro y a un burro parlanchín en los protagonistas de una aventura que se ríe de los cuentos de hadas.', dateLabel: 'Estreno original · 2001', scope: 'Cultura internacional', source: 'https://prod.dreamworks.com/movies/shrek', sourceName: 'DreamWorks' },
  { id: 'athens', year: 2004, kind: 'Deportes', title: 'Una generación bañada en oro', description: 'La selección argentina de básquet ganó el oro olímpico en Atenas 2004. En la final venció a Italia por 84 a 69: una de las grandes conquistas de la Generación Dorada.', dateLabel: 'Juegos Olímpicos · 2004', scope: 'Atenas · Grecia', source: 'https://www.fiba.basketball/en/news/remembering-ginobilis-top-10-argentina-games-ahead-of-hall-of-fame-enshrinement', sourceName: 'FIBA' },
  { id: 'hybrid', year: 2000, kind: 'Música', title: 'El comienzo de Linkin Park', description: 'Hybrid Theory se publicó el 24 de octubre de 2000. In the End forma parte de ese disco: guitarras, rap y un piano que se reconoce desde el comienzo.', dateLabel: '24 de octubre de 2000', scope: 'Cultura internacional', source: 'https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq', sourceName: 'Spotify · créditos del álbum' },
];
export function factsForPeriod(period: Period) {
  return eraFacts.filter(f => f.year >= period.decade && f.year < period.decade + 10 && (period.year === null || f.year === period.year));
}
