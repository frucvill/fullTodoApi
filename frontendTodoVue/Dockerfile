FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto por defecto de Vite (5173)
EXPOSE 5173

# Comando para iniciar el servidor de desarrollo de Vite escuchando en todas las interfaces (host 0.0.0.0)
CMD ["npm", "run", "dev", "--", "--host"]

