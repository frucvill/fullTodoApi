# FullTodoApi - FullStack Todo Application

Aplicación FullStack de gestión de tareas (*Todos*) desarrollada con **NestJS** en el backend, **Vue.js** en el frontend, y respaldada por **MongoDB**, todo orquestado mediante **Docker**.

## 🚀 Tecnologías Principales
* **Backend:** NestJS, TypeScript, Mongoose.
* **Frontend:** Vue 3, Vite.
* **Base de Datos:** MongoDB, Mongo Express.
* **Contenedorización:** Docker & Docker Compose.

---

## 📋 Requisitos Previos
Asegúrate de tener instalado en tu equipo:
* [Docker](https://www.docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

---

## ⚙️ Configuración del Entorno

Antes de levantar los contenedores, asegúrate de crear tus archivos `.env` a partir de los ejemplos provistos en cada subproyecto:

1. En la carpeta `todo-api-nest`, crea un archivo `.env` basado en `.env.example`.
2. En la carpeta `frontendTodoVue`, crea un archivo `.env` basado en `.env.example`.

---

## 🚀 Cómo Ejecutar el Proyecto (Paso a Paso)

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/frucvill/fullTodoApi.git](https://github.com/frucvill/fullTodoApi.git)
   cd fullTodoApi

## 🚀 Guía de Uso con Docker Compose

### 1. Levantar los servicios con Docker Compose
Para compilar las imágenes y dejar corriendo todos los contenedores en segundo plano, ejecuta en la raíz del proyecto:
```bash
docker compose up --build -d


## 💻 Sobre el Frontend (Vue.js)
* **Instalación de dependencias:** Al igual que el backend, el `npm install` del frontend se ejecuta automáticamente dentro de su contenedor al compilar con Docker.
* **Modo de desarrollo / producción:** El Dockerfile del frontend está preparado para compilar y servir la aplicación de Vue a través de los puertos mapeados.
* **URL de acceso directo:** [http://localhost:8080](http://localhost:8080) *(Redirige internamente al puerto 5173 de la aplicación Vue)*