# Etapa de build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Etapa de producción
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
RUN npm prune --production
EXPOSE 3001
CMD ["node", "index.js"]