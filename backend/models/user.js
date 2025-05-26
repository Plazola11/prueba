const pool = require('../db');

async function getAllUsers() {
  const res = await pool.query('SELECT * FROM usuarios');
  return res.rows;
}

async function createUser(nombre, email) {
  const res = await pool.query(
    'INSERT INTO usuarios (nombre, email) VALUES ($1, $2) RETURNING *',
    [nombre, email]
  );
  return res.rows[0];
}

async function updateUser(id, nombre, email) {
  const res = await pool.query(
    'UPDATE usuarios SET nombre = $1, email = $2 WHERE id = $3 RETURNING *',
    [nombre, email, id]
  );
  return res.rows[0];
}

async function deleteUser(id) {
  await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
