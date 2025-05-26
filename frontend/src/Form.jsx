import React, { useState } from "react";

export default function UserCrud() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    if (editing) {
      setUsers(users.map(u => (u.id === form.id ? form : u)));
      setEditing(false);
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setForm({ id: null, name: "", email: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{editing ? "Editar Usuario" : "Nuevo Usuario"}</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-6">
        <input
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editing ? "Actualizar" : "Crear"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Usuarios</h2>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-yellow-400 px-2 py-1 rounded text-white"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-600 px-2 py-1 rounded text-white"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
