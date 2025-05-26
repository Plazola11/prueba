const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../models/user');

router.get('/', async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

router.post('/', async (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Nombre y email requeridos' });
  const user = await createUser(nombre, email);
  res.status(201).json(user);
});

router.put('/:id', async (req, res) => {
  const { nombre, email } = req.body;
  const { id } = req.params;
  if (!nombre || !email) return res.status(400).json({ error: 'Nombre y email requeridos' });
  const user = await updateUser(id, nombre, email);
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  await deleteUser(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
