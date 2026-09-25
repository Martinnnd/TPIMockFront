import type { EraContent } from '../contracts';
// Relatos y autores ficticios; los datos culturales incluyen sus fuentes.
export const content = {
  "introduction": {
    "label": "Los dos mil diez",
    "description": "Biografías, fotos cuadradas y todo un mundo en el bolsillo."
  },
  "memories": [
    {
      "id": "demo-2010-1",
      "title": "La foto de portada que sacamos diez veces",
      "year": 2012,
      "category": "Personales",
      "author": "Sofi",
      "description": "Nos encontramos junto al lago del Parque Centenario para estrenar mi celular. Quería una foto horizontal para la portada de mi biografía y mis amigos se tomaron el trabajo demasiado en serio: uno dirigía, otro sostenía las mochilas y el resto esperaba que dejara de pasar gente. Terminamos eligiendo la foto en la que salíamos riéndonos. Esa noche etiqueté a todos y la conversación siguió en los comentarios hasta que se hizo tarde.",
      "place": "Parque Centenario, Caballito, Buenos Aires",
      "lat": -34.6065,
      "lng": -58.4355,
      "source": "demo",
      "image": "/demo/park.jpg",
      "mediaCaption": "Foto ilustrativa actual de naturaleza; no corresponde al lugar ni a la fecha del relato."
    },
    {
      "id": "demo-2010-2",
      "title": "Get Lucky sonando frente al río",
      "year": 2013,
      "category": "Música",
      "author": "Nico",
      "description": "Fuimos con mi hermana al Monumento a la Bandera después de su última clase. Había descargado una canción de Daft Punk y quería que escuchara la guitarra del comienzo. Compartimos los auriculares, mirando cómo pasaban los barcos por el Paraná. Se quedó sin batería el teléfono antes del segundo tema, así que seguimos cantando lo poco que nos acordábamos. Todavía asocio esa tarde con el viento del río y su risa.",
      "place": "Monumento Nacional a la Bandera, Rosario",
      "lat": -32.9475,
      "lng": -60.6304,
      "source": "demo",
      "music": {
        "title": "Get Lucky",
        "artist": "Daft Punk · Pharrell Williams · Nile Rodgers",
        "spotifyId": "2lAOYHa5kr9G9eYCNebqWR"
      },
      "youtubeId": "5NV6Rdv1a3I",
      "mediaCaption": "Get Lucky · audio oficial de Daft Punk (2013)."
    },
    {
      "id": "demo-2010-3",
      "title": "El grupo por fin salió de la pantalla",
      "year": 2011,
      "category": "Lugares",
      "author": "Meli",
      "description": "En el grupo del curso llevábamos semanas diciendo que teníamos que vernos. Al final pusimos fecha y nos encontramos frente a la Catedral, en la Plaza San Martín de Córdoba. Algunos llegaron tarde porque habían leído una dirección vieja en el chat. Compramos algo para tomar y nos sentamos a comparar las fotos del viaje de egresados. Antes de irnos hicimos una nueva: la primera en la que ya no teníamos uniforme.",
      "place": "Plaza San Martín, centro de Córdoba",
      "lat": -31.4167,
      "lng": -64.1835,
      "source": "demo",
      "video": "/demo/flowers.mp4",
      "mediaCaption": "Video ilustrativo actual de flores · muestra CC0 de MDN."
    },
    {
      "id": "demo-2010-4",
      "title": "La tarde de las camisetas celestes",
      "year": 2014,
      "category": "Acontecimientos",
      "author": "Tomi",
      "description": "Después de ver un partido del Mundial en casa de mi primo, salimos a caminar por el lago del Parque General San Martín. Llevábamos las camisetas de la selección y el celular no paraba de vibrar con mensajes del grupo familiar. Mi abuelo nos pidió una foto juntos para guardarla. Tardamos tanto en acomodarnos que al final una señora que pasaba nos la sacó. Él la mandó a imprimir y la puso al lado del televisor.",
      "place": "Lago del Parque General San Martín, Mendoza",
      "lat": -32.8951,
      "lng": -68.8794,
      "source": "demo",
      "music": {
        "title": "Rolling in the Deep",
        "artist": "Adele",
        "spotifyId": "2GblQ918RbkOs4Yo1Rpkcj"
      }
    },
    {
      "id": "demo-2010-5",
      "title": "Cantando a la salida del cine",
      "year": 2014,
      "category": "Cine",
      "author": "Juli",
      "description": "Una tarde de lluvia en Mar del Plata llevé a mi sobrina al cine a ver Frozen. A la salida cruzamos hasta Plaza Colón y se empeñó en cantar una de las canciones mientras saltaba los charcos. Yo grabé unos segundos con el teléfono, cuidando que no se me mojara. Después merendamos chocolate con churros y vimos el video cuatro veces. Cuando vuelvo a esa plaza todavía me acuerdo de sus botas amarillas.",
      "place": "Plaza Colón, centro de Mar del Plata",
      "lat": -38.0068,
      "lng": -57.5433,
      "source": "demo"
    },
    {
      "id": "demo-2010-6",
      "title": "Un capítulo pendiente y una vista imposible",
      "year": 2015,
      "category": "Televisión",
      "author": "Fran",
      "description": "Durante las vacaciones nos sentamos en un banco del Centro Cívico de Bariloche para decidir dónde cenar. Mis amigos hablaban del final de una serie que yo todavía no había visto y les pedí que no contaran nada. Terminamos inventando finales absurdos mientras esperábamos a los demás. Esa noche el wifi del alojamiento era tan lento que no pude ver el capítulo. La charla del banco, en cambio, me la acuerdo entera.",
      "place": "Centro Cívico, San Carlos de Bariloche",
      "lat": -41.1335,
      "lng": -71.3102,
      "source": "demo"
    },
    {
      "id": "demo-2010-7",
      "title": "Salimos a buscar Pokémon y encontramos amigos",
      "year": 2016,
      "category": "Videojuegos",
      "author": "Vale",
      "description": "Esa tarde nos citamos en la Plaza 9 de Julio de Salta con los teléfonos cargados para jugar Pokémon GO. Había otros grupos mirando la pantalla y levantando la cabeza cada pocos pasos. Nos pusimos a conversar con dos chicos que nos explicaron un detalle del juego y terminamos todos tomando helado frente al Cabildo. Volvimos al hotel con poca batería, muchas fotos y un grupo nuevo para encontrarnos al día siguiente.",
      "place": "Plaza 9 de Julio, centro de Salta",
      "lat": -24.7892,
      "lng": -65.4103,
      "source": "demo"
    }
  ],
  "facts": [
    {
      "id": "2010-iphone4",
      "year": 2010,
      "kind": "Tecnología",
      "title": "El teléfono se convirtió en cámara de todos los días",
      "description": "Apple presentó el iPhone 4 el 7 de junio de 2010. Su pantalla Retina, la cámara frontal y FaceTime formaron parte de una generación de teléfonos que acercó las fotos y las videollamadas al bolsillo.",
      "dateLabel": "7 de junio de 2010",
      "scope": "Presentación internacional",
      "source": "https://www.apple.com/newsroom/2010/06/07Apple-Presents-iPhone-4/",
      "sourceName": "Apple"
    },
    {
      "id": "2012-curiosity",
      "year": 2012,
      "kind": "Acontecimientos",
      "title": "Un nuevo explorador llegó a Marte",
      "description": "Curiosity aterrizó en el cráter Gale el 6 de agosto de 2012, según la fecha UTC. El rover de la NASA comenzó a investigar las rocas y el ambiente marciano para estudiar si existieron condiciones favorables para la vida.",
      "dateLabel": "6 de agosto de 2012 · UTC",
      "scope": "Exploración espacial",
      "source": "https://science.nasa.gov/resource/curiosity-has-landed/",
      "sourceName": "NASA"
    },
    {
      "id": "2013-frozen",
      "year": 2013,
      "kind": "Cine",
      "title": "Una aventura congelada que terminó en todas las playlists",
      "description": "Frozen se estrenó en Estados Unidos el 27 de noviembre de 2013. La historia de Anna y Elsa combinó una aventura de hermanas con canciones que acompañaron a una generación. Esta fecha corresponde al estreno estadounidense.",
      "dateLabel": "27 de noviembre de 2013 · Estados Unidos",
      "scope": "Cultura internacional",
      "source": "https://movies.disney.com/frozen/",
      "sourceName": "Disney"
    }
  ],
  "music": [
    {
      "title": "Get Lucky",
      "artist": "Daft Punk · Pharrell Williams · Nile Rodgers",
      "year": 2013,
      "spotifyId": "2lAOYHa5kr9G9eYCNebqWR",
      "reference": "https://open.spotify.com/track/2lAOYHa5kr9G9eYCNebqWR"
    },
    {
      "title": "Rolling in the Deep",
      "artist": "Adele",
      "year": 2011,
      "spotifyId": "2GblQ918RbkOs4Yo1Rpkcj",
      "reference": "https://open.spotify.com/track/2GblQ918RbkOs4Yo1Rpkcj"
    },
    {
      "title": "Uptown Funk",
      "artist": "Mark Ronson · Bruno Mars",
      "year": 2014,
      "spotifyId": "32OlwWuMpZ6b0aN2RZOeMS",
      "reference": "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS"
    },
    {
      "title": "Somebody That I Used to Know",
      "artist": "Gotye · Kimbra",
      "year": 2011,
      "spotifyId": "5jiXstb7P5Dq1gTqKVQJiY",
      "reference": "https://open.spotify.com/track/5jiXstb7P5Dq1gTqKVQJiY"
    },
    {
      "title": "Wake Me Up",
      "artist": "Avicii",
      "year": 2013,
      "spotifyId": "0UgLHf4WheJhiTIgixmZ01",
      "reference": "https://open.spotify.com/track/0UgLHf4WheJhiTIgixmZ01"
    }
  ]
} satisfies EraContent;
