const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Usa .env para separar credenciales
});

module.exports = pool;
