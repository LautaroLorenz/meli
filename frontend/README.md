# Cliente

Solución de Front-End Test Práctico.

## Stack tecnológico

Hecho en React

## Puesta en marcha

- El repositorio NO incluye dependencias, **ejecutar** `npm install`.
- Iniciar con `npm start`

## Scaffolding

Estructura de carpetas y explicación de su responsabilidad.

- api/
  - Lógica de conexión con backend.
- assets/
  - Imagenes, fuentes, iconos y demas elementos de soporte para el diseño.
- components/
  - Componentes reutilizables cross proyecto.
  - Dependencia mínima, solo saben mostrar información.
- core/
  - Clases con lógica que no pertenece al negocio pero es reutilizable.
- pages/
  - Layout de componentes que renderizan según cambie la url.
  - Encargados de manipular datos de negocio desde y hacia los componentes.
- styles/
  - Estilos cross proyecto.

## favicon.ico

Para el favicon.ico se utilizó una versión de las imagenes creada usando como base el logo. La calidad de imagen resultante es obviamente baja.

## Public vs Assets

La carpeta **assets** se agrega en reemplazo del uso de **public**
por los motivos mencionados en este hilo de Github [issues/9937](https://github.com/facebook/create-react-app/issues/9937)

## Font size

Se respetó la unidad **px** indicada en los Specs

## Task

Listado de tareas pendientes:

- [ ] Multilenguaje
- [ ] Test
- [ ] Hooks (investigar)
- [ ] UI/UX errors (eJemplo: search "asoigjsaoigjoiqwejgoiq")
- [x] Loaders
- [ ] SCSS (red and green global margin size)
- [ ] Thumbnail (investigar SEO)
