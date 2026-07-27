# --- Etapa 1: Compilación (Builder) ---
# Usamos una imagen oficial de Node.js basada en Alpine para que sea ligera
FROM node:20-alpine AS builder

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos primero los archivos de dependencias para aprovechar la caché de Docker
COPY package*.json ./

# Instalamos todas las dependencias (incluyendo las de desarrollo para compilar TypeScript)
RUN npm ci

# Copiamos el resto del código fuente de tu proyecto NestJS
COPY . .

# Compilamos la aplicación (genera la carpeta /dist)
RUN npm run build


# --- Etapa 2: Ejecución en Producción ---
FROM node:20-alpine

WORKDIR /usr/src/app

# Copiamos de nuevo los archivos de dependencias
COPY package*.json ./

# Instalamos ÚNICAMENTE las dependencias de producción (reduce el peso de la imagen)
RUN npm ci --only=production

# Copiamos los archivos ya compilados desde la primera etapa (builder)
COPY --from=builder /usr/src/app/dist ./dist

# Exponemos el puerto en el que corre NestJS
EXPOSE 3000

# Comando para iniciar la aplicación en producción
CMD ["node", "dist/main"]
