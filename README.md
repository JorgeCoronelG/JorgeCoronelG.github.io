# Portafolio web – Jorge Coronel

Portafolio web personal construido con [Astro](https://astro.build) y Tailwind CSS.

## Requisitos

- [Docker](https://docs.docker.com/get-docker/)

No es necesario tener Node.js instalado; todo se ejecuta dentro de un contenedor con `node:22`.

Todos los comandos se ejecutan desde la raíz del proyecto.

## Ejecutar el proyecto (desarrollo)

Levanta el servidor de desarrollo en <http://localhost:4321>. Las dependencias se guardan en un volumen de Docker (`portafolio-node-modules`) para no mezclar los binarios de Linux con los de tu máquina.

```sh
docker run -d --name portafolio \
  -p 4321:4321 \
  -v "$(pwd)":/app \
  -v portafolio-node-modules:/app/node_modules \
  -w /app \
  node:22 \
  sh -c "npm install && npm run dev -- --host 0.0.0.0"
```

Ver los logs (útil para saber cuándo terminó `npm install`):

```sh
docker logs -f portafolio
```

## Generar el build de producción

Genera el sitio estático en `./dist/`:

```sh
docker run --rm \
  -v "$(pwd)":/app \
  -v portafolio-node-modules:/app/node_modules \
  -w /app \
  node:22 \
  sh -c "npm install && npm run build"
```

## Detener el proyecto

```sh
docker stop portafolio
```

Para volver a iniciarlo:

```sh
docker start portafolio
```

## Bajar el proyecto y limpiar los datos

Elimina el contenedor, el volumen con las dependencias y la imagen descargada:

```sh
# Detener y eliminar el contenedor
docker rm -f portafolio

# Eliminar el volumen de node_modules
docker volume rm portafolio-node-modules

# Eliminar la imagen de Node (opcional)
docker rmi node:22
```

Para limpiar también los archivos generados en el proyecto:

```sh
rm -rf dist .astro
```

> Si usas la imagen `node:22` en otros proyectos, omite el último `docker rmi`.
