> **Trabajo en equipo:** el proyecto ahora se organiza por parejas en `src/eras/70s`, `80s`, `90s`, `2000s` y `2010s`. Empezar por [la guia de arquitectura y colaboracion](docs/TRABAJO_EN_EQUIPO.md). Los archivos `data.ts`, `eraData.ts` y `themes.ts` son agregadores; el contenido y los temas se editan dentro de cada epoca.

# Nostalgia

Prototipo frontend del proyecto final de Desarrollo Web de UNLaM. El mapa de Argentina ocupa toda la pantalla: las décadas, categorías, historias, datos culturales y música se exploran mediante controles flotantes. React, TypeScript, Vite y React Leaflet; sin backend, cuentas ni base de datos.

## Ejecutar

Requiere Node.js 22 y npm.

```sh
npm install
npm run dev
```

Abrí la dirección que muestra Vite, normalmente `http://localhost:5173`.

```sh
npm run build
npm run preview
npm test
npm run test:e2e
```

El build verifica TypeScript y genera `dist/`. `npm test` verifica filtrado, contenido de época y almacenamiento. Las pruebas de recorrido usan Chrome instalado y perfiles aislados: no cambian tus recuerdos. Cubren escritorio, móvil, fichas, creación, cancelación, persistencia, datos culturales, integración musical y fallos de red/almacenamiento. La prueba automatizada de Spotify aísla la respuesta del proveedor para no depender de sus licencias o sesiones; no simula ni afirma verificar reproducción real.

## Recorrido de la demo

1. Entrá directamente al mapa y abrí un pin. **Historias** también permite leer los recuerdos desde una lista.
2. Elegí **70s**, **80s**, **90s** o **2000**. Cambian el tema visual, las historias, los datos culturales y la selección musical. Podés combinar un año con una categoría.
3. En **La época**, recorré los datos con las flechas y consultá sus fuentes. El panel aparece al cambiar de período, se puede cerrar y no avanza solo. En móvil comienza resumido: **Leer dato** abre el texto completo.
4. En **Música** o la tarjeta inferior, abrí el reproductor y pulsá reproducir dentro de Spotify. Las flechas cambian de pista. Cerrar el reproductor o cambiar de década desmonta el iframe y detiene su reproducción.
5. Tocá **Agregar un recuerdo**, elegí un punto del mapa y completá el formulario. También podés enfocar el mapa, moverte con las flechas y pulsar Enter para elegir su centro. Escape cancela.
6. Al guardar se ajustan década y filtros para mostrar el nuevo recuerdo. Recargá, volvé a su década y abrilo desde un pin o la lista de historias.

En escritorio, el mapa ocupa toda la ventana salvo la barra lateral de navegación. En móvil ocupa el fondo hasta la barra inferior. Los paneles móviles se alternan para evitar apilar ventanas, y la atribución cartográfica permanece fuera de las tarjetas.

## Música real

La selección utiliza **embeds oficiales de Spotify** con grabaciones comerciales, sin descargar ni alojar archivos de audio:

- **80s:** Guns N’ Roses — Sweet Child O’ Mine y Welcome to the Jungle.
- **90s:** Michael Jackson — Black or White; Soda Stereo — De música ligera.
- **2000:** Linkin Park — In the End; Coldplay — Clocks.

La fecha indicada es el año de publicación en el álbum original, no el año de una reedición ni necesariamente el del sencillo. Los enlaces y referencias están en el `content.ts` de cada epoca.

Spotify puede ofrecer solamente una **muestra** dependiendo de la sesión, disponibilidad regional y entorno del reproductor. Siempre hay un enlace **Abrir Spotify** para continuar en el proveedor. No se promete reproducción completa sin cuenta. Los controles de reproducción y las funciones disponibles los proporciona Spotify; no hay controles de audio ficticios. El iframe se carga únicamente al abrir el reproductor y nunca se solicita autoplay.

Referencias técnicas: [crear un embed](https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed) y [limitaciones del reproductor](https://developer.spotify.com/documentation/embeds/tutorials/troubleshooting).

## Identidad visual de cada época

El selector cambia tipografías, materiales, íconos, marcos de ventana, marcadores y navegación:

- **80s / VHS y arcade:** títulos Audiowide, interfaz Chakra Petch y rótulos VT323; neón cian y fucsia, bordes de monitor, líneas CRT suaves y una cuadrícula de perspectiva. Los efectos son decorativos, no capturan clics ni alteran los controles de Spotify. No hay destellos ni reproducción automática; con movimiento reducido se elimina la trama CRT y se simplifica la cuadrícula.
- **90s / Windows 95:** tipografía de sistema Tahoma/MS Sans Serif, superficies grises, botones con relieve, selección hundida, cabeceras azul marino y accesos de escritorio. La barra de tareas y el menú **Inicio** abren realmente el mapa, las historias, los datos culturales y la música.
- **2000 / Messenger e Internet Explorer:** títulos Trebuchet MS, textos Verdana/Tahoma, cabeceras azules, botones con brillo, detalles de contactos y un menú **Mis espacios**. El botón de minimizar permite volver al mapa sin los paneles abiertos.

Los textos largos conservan tamaños legibles. La distribución principal permanece estable al viajar entre décadas. En móvil se usa la navegación inferior, y se ocultan las barras extra de escritorio para dejar espacio al mapa. Las tipografías web se cargan desde Google Fonts con alternativas locales.

Cada carpeta de `src/eras/` contiene su tema, CSS, Chrome, Player y contenido. El registro central conecta estos modulos con la logica compartida. Los CSS de la raiz conservan estilos comunes.

## Contenido y fuentes

Hay **28 relatos ficticios** situados en lugares reales de Buenos Aires, Rosario, Córdoba, Mendoza, Mar del Plata, Bariloche y Salta. Sus autores, encuentros y experiencias son ejemplos de demostración, identificados en cada ficha. No se presentan como testimonios históricos. Cada relato cuenta a dónde fueron, con quién y qué ocurrió en la escena imaginada.

Separadamente, hay **12 datos culturales** sobre cine, música, tecnología, democracia y deporte. Cada entrada en el `content.ts` de cada epoca contiene año, alcance geográfico, descripción y enlace a la fuente. Se consultaron Amblin, Disney, DreamWorks, Argentina.gob.ar, CERN, FIBA, el sitio oficial de Michael Jackson y los créditos de Spotify. Las fechas de películas corresponden al estreno original, no al estreno argentino. Estos datos no tienen pines arbitrarios: un estreno internacional o un torneo disputado en Grecia no se ubica en Argentina.

### Agregar historias e imágenes

En el `content.ts` de tu equipo, agrega una entrada a `memories` con ID unico, coordenadas, titulo, anio, categoria, autor y descripcion. Usa source demo para ejemplos; el formulario guarda source local.

Para fotos propias o con permiso de uso, guardá el archivo en `public/images/` y asigná `image: '/images/archivo.jpg'` al recuerdo. `MemoryArtwork` usa el título como alternativa textual y muestra la postal gráfica local si falla la imagen. Las postales CSS no son fotografías históricas. Documentá autoría y licencia de las fotos agregadas.

### Agregar datos de época o canciones

En el `content.ts` de tu epoca, agregá un `EraFact` a `facts`, verificando el hecho y guardando `source`, `sourceName`, `dateLabel` y `scope`. El selector combina década y año; si no hay datos de ese año muestra un estado vacío.

Para música, agregá a `music` un título, artista, año original, ID de pista de Spotify y enlace. Verificá que el embed corresponda a la grabación correcta y esté disponible. No se necesitan claves API ni archivos MP3. El catálogo inicial es local; solo la reproducción depende del proveedor externo.

## Organización

- `src/App.tsx`: período, filtros, selección, paneles y creación centralizados.
- `src/components/MemoryMap.tsx`: mapa, pines, zoom, elección de coordenadas y errores de cartografía.
- `src/components/Timeline.tsx`: selector temporal flotante.
- `src/components/SidePanel.tsx`: historias y fichas detalladas.
- `src/components/EraFacts.tsx`: popup cultural con fuentes y paginación.
- `src/components/EraChrome.tsx`: marcos de época, íconos, barra de tareas y menú Inicio.
- `src/components/MemoryForm.tsx`: diálogo nativo accesible y validación.
- `src/components/Player.tsx`: integración de Spotify con carga explícita.
- `src/data.ts`: agrega recuerdos de las cinco carpetas de epoca.
- `src/eraData.ts`: agrega musica y datos culturales de las epocas.
- `src/storage.ts`: persistencia y recuperación de datos inválidos.
- `src/styles.css`: distribución a pantalla completa y temas con variables CSS.
- `src/eras/`: modulos por equipo; `registry.ts` los integra y `contracts.ts` define sus interfaces.

## Vercel

No se publica ni se hace push automáticamente. Cuando decidas desplegar, importá el repositorio en Vercel con preset **Vite**, comando `npm run build` y salida `dist`. No requiere variables de entorno ni reglas de redirección: tiene una sola ruta. También funciona en cualquier hosting estático con HTTPS.

## Limitaciones

- Los recuerdos propios se guardan únicamente en `localStorage` de ese navegador y origen. Borrar los datos del sitio los elimina. No se sincronizan entre dispositivos.
- Si falla el guardado, el formulario conserva lo escrito. Los registros corruptos se omiten con un aviso.
- Se necesita conexión para las teselas de OpenStreetMap y Spotify. Google Fonts tiene fuentes del sistema como alternativa. No hay backend ni APIs para obtener el dataset.
- La cartografía representa la geografía actual. Se conserva su atribución; no hay descarga masiva, precarga ni caché offline de mapas.
- Incluye perfiles locales; no incluye login, chat ni subida de archivos. Usá un navegador moderno compatible con `<dialog>`, `crypto.randomUUID` y almacenamiento local.

### Controles compactos y reproductores

La época activa y la categoría elegida se muestran en selectores compactos. Los tres puntos abren las opciones; elegir una, hacer clic afuera o presionar Escape cierra el menú. Las categorías están debajo del selector temporal.

El reproductor representa un tocadiscos de madera en los 80, una radio con casetera en los 90 y un reproductor de bolsillo con rueda en los 2000. Los controles mantienen la integración con Spotify. En móvil se usa una versión compacta; al abrirla aparecen también los detalles del dispositivo.

### Edición de los setenta

La década 1970–1979 agrega una identidad de revista y periódico: titulares serif, tinta azul y naranja, papel crema, marcos de doble línea y mapa sepia con grano y pliegues decorativos. Mantiene los controles compartidos e incluye siete escenas ficticias en lugares reales, tres datos culturales con fuentes y dos canciones de ABBA y Queen. El formulario y la persistencia aceptan recuerdos desde 1970. Las otras décadas conservan sus temas.

### Feed y perfil

La navegación incluye Feed y Perfil. El mapa sigue siendo la vista inicial; en las vistas sociales se reduce a un mapa lateral interactivo. El feed comparte los filtros de época, año y categoría, y adapta su diseño a los cinco temas. Cada publicación abre su relato completo y permite volver a su ubicación en el mapa. Para vos muestra los recuerdos disponibles; Seguidos filtra los autores seleccionados.

El perfil reúne los recuerdos locales de la época elegida y muestra el total guardado. No hay autenticación todavía. Seguidos, me gusta y comentarios funcionan durante la sesión como interacciones de demostración, sin enviarse a un servidor. Los recuerdos publicados mantienen la persistencia local existente.

### Perfil personal

El perfil ahora tiene una vista independiente: encabezado, contadores de recuerdos, seguidores, seguidos y lugares, un mapa grande con publicaciones propias y una colección de tarjetas. El mapa y la colección respetan los filtros; los contadores resumen todo el archivo local. Seleccionar un pin o una tarjeta abre el recuerdo completo. Crear un recuerdo desde el perfil regresa al perfil al guardar o cancelar.

Sin autenticación, los seguidores se muestran en cero y los seguidos reflejan las selecciones del feed durante la sesión. No se presentan publicaciones de otros autores como propias.

## Globo Mapbox (pantalla principal)

Copiar .env.example a .env.local y reemplazar VITE_MAPBOX_ACCESS_TOKEN por un token publico propio de Mapbox (pk.). Reiniciar npm run dev. No usar tokens secretos sk. ni subir .env.local a GitHub. En el despliegue configurar la misma variable y reconstruir.

El globo usa Mapbox Standard con atmosfera, estrellas, iluminacion, temas Original/Suave/Monocromo y opcion satelite. Se conservan filtros, publicaciones, seleccion y creacion por clic o Enter. Los mapas de feed/perfil siguen en Leaflet. Sin token, o si no hay WebGL, se muestra el mapa 2D con un aviso; los errores de red permiten volver a 2D.

El token publico es visible en el navegador por dise?o. Usar permisos publicos y restricciones de URL compatibles con localhost y el dominio de despliegue. La cuenta de Mapbox debe tener habilitado el acceso correspondiente; las solicitudes quedan sujetas a su plan.

Verificacion: npm run check, npm test, npm run build. La suite actual tests/demo.spec.ts comprueba el recorrido 2D sin token; la carga real de Mapbox requiere token y conexion.

Referencia: https://docs.mapbox.com/mapbox-gl-js/guides/globe/


### Nueva década: 2010–2019

Abrir `http://localhost:5173/?era=2010`. Estética de biografía social, perfil con portada e iPhone 4 como reproductor. Incluye siete relatos ficticios, tres datos con fuentes de Apple/NASA/Disney y dos canciones en Spotify. Formularios y almacenamiento admiten años hasta 2019. Ver [guía del equipo 2010s](src/eras/2010s/README.md).


### Adjuntos y canciones en publicaciones

El formulario permite una imagen JPG/PNG/WebP/GIF de hasta 10 MB o un video MP4/WebM de hasta 50 MB, más una canción opcional del catálogo de las cinco épocas. Se muestran en el feed, la historia del mapa y el detalle del perfil. Los archivos se guardan en IndexedDB (`nostalgia-media`); localStorage conserva sus referencias y la canción. Las publicaciones anteriores siguen funcionando. Borrar los datos del navegador también borra los adjuntos.

La música muestra título y artista y abre Spotify bajo demanda. La duración disponible depende del proveedor y de la sesión del oyente. No hay reproducción automática ni distribución entre dispositivos en este prototipo. Al ocultar una publicación se detiene su reproducción; al iniciar otro medio se pausa el anterior.
