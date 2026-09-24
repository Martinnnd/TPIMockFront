# Trabajo por parejas y épocas

La aplicación separa el motor funcional de la presentación. Cada pareja es dueña de una carpeta; cambiar su aspecto no requiere editar App, los mapas, Spotify ni los archivos de otras épocas.

| Pareja | Carpeta | Vista de trabajo |
| --- | --- | --- |
| A · Setenta | `src/eras/70s/` | `http://localhost:5173/?era=1970` |
| B · Ochenta | `src/eras/80s/` | `http://localhost:5173/?era=1980` |
| C · Noventa | `src/eras/90s/` | `http://localhost:5173/?era=1990` |
| D · Dos mil | `src/eras/2000s/` | `http://localhost:5173/?era=2000` |
| E · Dos mil diez | `src/eras/2010s/` | `http://localhost:5173/?era=2010` |

## Qué edita cada pareja

```text
src/eras/80s/             # Misma estructura en las cinco carpetas
  theme.ts               # Colores, fuentes, tokens, textos e iconos
  theme.css              # Estilos de mapa, feed, perfil, ventanas y reproductor
  Chrome.tsx             # Marco visual propio de la época
  Player.tsx             # Apariencia del dispositivo y controles compartidos
  content.ts             # Recuerdos ficticios, canciones, datos y fuentes
  index.ts               # Exportación del módulo; incluye sus estilos
  contract.test.ts       # Prueba independiente del módulo
```

Una persona se ocupa de tipografías, colores, tokens y CSS; la otra de la estructura de Chrome y Player. Ambas acuerdan las clases y el contenido dentro de su carpeta. No se asignan líneas de un archivo global a equipos distintos.

Los tokens se aplican al contenedor de la aplicación desde `theme.ts`. Todas las reglas de `theme.css`, incluidas las de móvil, deben quedar bajo la clase correspondiente, por ejemplo `.era-1980 .feed-post`. No usar selectores globales como `button`, `.app` o `.feed-post` sin el alcance de la época. Los cambios visuales de feed, perfil, formularios, mapa ampliado y mapas también van aquí.

Las clases compartidas son parte del contrato de presentación. Si hace falta cambiar la estructura de feed o perfil, proponer un slot o un nuevo contrato compartido antes de modificar el componente base; no copiar la lógica funcional dentro de una época.

## Motor común: coordinar cambios

| Archivos | Responsabilidad |
| --- | --- |
| `src/App.tsx` | Navegación, filtros, selección, creación y estado de sesión |
| `src/types.ts`, `src/storage.ts` | Modelo de dominio y persistencia local |
| `src/components/MemoryMap.tsx`, `MapModal.tsx` | Mapas, pines, coordenadas y ampliación |
| `src/components/MemoryForm.tsx` | Formulario y validación |
| `src/components/SocialFeed.tsx`, `Profile.tsx`, `SidePanel.tsx`, `EraFacts.tsx` | Comportamiento de las vistas |
| `src/components/Player.tsx` | Selección y cambio de pistas |
| `src/eras/shared/PlayerFrame.tsx` | Integración Spotify y controles accesibles |
| `src/eras/shared/DesktopChrome.tsx` | Menú y barra de tareas reutilizables |
| `src/styles.css`, `themes.css`, `social.css` | Layout y reglas comunes, sin diseños de décadas |
| `src/data.ts`, `eraData.ts`, `themes.ts` | Agregadores; no agregar contenido aquí |

El motor y `src/eras/shared/` requieren acuerdo entre parejas. Los componentes temáticos reciben datos y callbacks: no acceden a localStorage, no hacen login, no cambian rutas ni inicializan mapas por su cuenta.

## Contratos e integración

`src/eras/contracts.ts` define `EraModule`, `EraTheme`, `ChromeProps`, `PlayerViewProps` y `EraContent`. Cada `index.ts` usa `satisfies EraModule`: TypeScript detecta props faltantes y cambios incompatibles. `src/eras/registry.ts` registra las cinco implementaciones y es el punto de integración de módulos. El selector temporal, los adaptadores y los agregadores leen ese registro.

Para editar una época existente, no se modifica el registro. Para agregar una nueva, se coordina el cambio en el registro, la unión `Decade` y el rango admitido por la validación; no agregar condicionales visuales en App ni Player.

En `content.ts`, conservar los IDs existentes para no alterar la selección ni las referencias. Para nuevas publicaciones usar IDs propios como `80s-recuerdo-escuela-01`. Las historias demo son ficticias; los datos históricos llevan fuente. Los años deben corresponder a la década. Las canciones conservan enlaces reales y al menos una pista por módulo. Los recuerdos guardados en el navegador no se migran ni se eliminan.

## Flujo de trabajo

1. Crear una rama por tarea, por ejemplo `era/80s-reproductor` o `era/70s-tipografia`.
2. Modificar la carpeta de la pareja. Si hace falta tocar un contrato o componente compartido, acordar primero ese cambio y hacerlo en una PR separada.
3. Ejecutar las verificaciones y revisar la época en mapa, feed, perfil y móvil.
4. Abrir una PR con el problema, el cambio visible y las pruebas realizadas. La otra persona de la pareja revisa. Un cambio compartido necesita además revisión de las parejas afectadas.
5. Integrar cambios del motor antes de continuar una tarea que dependa de ellos. No resolver conflictos reemplazando archivos globales completos.

```sh
npm ci
npm run dev
npm run check                  # TypeScript y límites entre equipos
npm run test:era -- 80s         # Sólo el contrato de esa carpeta
npm test                       # Contratos de todas las épocas y núcleo
npm run test:e2e:ui             # Recorridos funcionales y apariencia
npm run build
```

`npm run test:e2e` ejecuta todos los recorridos de interfaz: mapa 2D, feed, perfil y mapa ampliado. La pantalla principal ahora integra el globo Mapbox mediante MainMap.tsx y MapboxMap.tsx. Necesita VITE_MAPBOX_ACCESS_TOKEN. Sin token o sin WebGL se conserva el mapa 2D. Los mapas del feed y perfil siguen siendo 2D.

El chequeo de arquitectura rechaza imports de otra carpeta de época, dependencias hacia los agregadores que crearían ciclos y selectores CSS que invadan otro equipo. No se configuraron responsables de GitHub ficticios: al conocer los usuarios del equipo se puede agregar CODEOWNERS.
