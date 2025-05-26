#  Gestión de Usuarios con Docker

Aplicación web fullstack que permite gestionar usuarios y departamentos, desarrollada con:

- **Frontend**: React + Material UI
- **Backend**: Node.js + Express
- **Base de datos**: PostgreSQL
- **Orquestación**: Docker + Docker Compose

## 📦 Estructura del proyecto

<details> <summary><strong>📁 Estructura del Proyecto (haz clic para expandir)</strong></summary>

prueba/
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   ├── models/
│   │   └── user.js
│   └── routes/
│       └── usuarios.js
├── frontend/
│   ├── Dockerfile
│   ├── vite.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── UserForm.jsx
│   │   │   └── UserList.jsx
│   │   └── hooks/
│   │       └── useUsuarios.js
│   └── public/
│       └── index.html
├── init.sql
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
</details>

## 🚀 ¿Cómo ejecutar el proyecto?

### 1. Requisitos previos

- Tener [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/install/) instalados.

### 2. Clonar el repositorio

```bash
git clone https://github.com/Plazola11/prueba.git
cd prueba
```
### 3. Levantar la aplicación
```bash
docker-compose up --build 
```