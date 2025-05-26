const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser, getAllDepartments, } = require('../models/user');

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

router.get('/departamentos', async (req, res) =>{
  try {
    const departments = await getAllDepartments()
    res.json(departments)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener departamentos' });
  }
});

router.post('/', async (req, res) => {
  const { nombre, apellido, edad, departamento, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Nombre y email requeridos' });
  const user = await createUser(nombre, apellido, edad, departamento, email);
  res.status(201).json(user);
});

router.put('/:id', async (req, res) => {
  const { nombre, apellido, edad, departamento, email } = req.body;
  const { id } = req.params;
  if (!nombre || !email) return res.status(400).json({ error: 'Nombre y email requeridos' });
  const user = await updateUser(id, nombre, apellido, edad, departamento, email);
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  await deleteUser(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
