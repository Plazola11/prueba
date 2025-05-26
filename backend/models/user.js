const pool = require('../db');

async function getAllUsers() {
  const res = await pool.query(`
      SELECT 
        usuarios.id,
        usuarios.nombre,
        usuarios.apellido,
        usuarios.edad,
        usuarios.correo,
        usuarios.departamento_id,
        departamentos.nombre AS departamento,
        usuarios.status
      FROM usuarios
      JOIN departamentos ON usuarios.departamento_id = departamentos.id
      WHERE usuarios.status = 'activo';
    `);
  return res.rows;
}

async function getAllDepartments() {
  const res = await pool.query(`SELECT * FROM departamentos`);
  return res.rows
}

async function createUser(nombre, apellido, edad, departamento, email) {
  const res = await pool.query(
    'INSERT INTO usuarios (nombre, apellido, edad, departamento_id, correo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nombre, apellido, edad, departamento, email]
  );
  return res.rows[0];
}

async function updateUser(id, nombre, apellido, edad, departamento, email) {
  const res = await pool.query(
    'UPDATE usuarios SET nombre = $1, apellido = $2, edad = $3, departamento_id = $4, correo = $5 WHERE id = $6 RETURNING *',
    [nombre, apellido, edad, departamento, email, id]
  );
  return res.rows[0];
}

async function deleteUser(id) {
  await pool.query('UPDATE usuarios SET status = $1  WHERE id = $2', ['inactivo', id]);
}

module.exports = { getAllUsers, getAllDepartments, createUser, updateUser, deleteUser };
