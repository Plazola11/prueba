FROM node:18

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias y luego instalar
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto que Vite usa por defecto
EXPOSE 5173

# Comando para levantar el servidor de desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host"]
