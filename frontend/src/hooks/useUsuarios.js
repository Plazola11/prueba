import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/usuarios';

export function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    departamento: '',
    email: ''
  });
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resUsuarios, resDepartamentos] = await Promise.all([
          axios.get(API_URL),
          axios.get(`${API_URL}/departamentos`)
        ]);
        setUsuarios(resUsuarios.data);
        setDepartamentos(resDepartamentos.data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };
    fetchData();
  }, []);

  const manejarSubmit = async () => {
    const { nombre, apellido, edad, departamento, email } = formData;
    if (!nombre || !apellido || !edad || !departamento || !email) return;

    try {
      if (editando !== null) {
        await axios.put(`${API_URL}/${editando}`, formData);
        setEditando(null);
      } else {
        await axios.post(API_URL, formData);
      }
      const res = await axios.get(API_URL);
      setUsuarios(res.data);
      setFormData({ nombre: '', apellido: '', edad: '', departamento: '', email: '' });
    } catch (error) {
      console.error('Error en manejarSubmit:', error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsuarios(prev => prev.filter(u => u.id !== id));
    } catch (error) {
      console.error('Error eliminando usuario:', error);
    }
  };

  const comenzarEdicion = (usuario) => {
    setFormData({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      departamento: usuario.departamento_id,
      email: usuario.correo
    });
    setEditando(usuario.id);
  };

  return {
    usuarios,
    departamentos,
    formData,
    setFormData,
    manejarSubmit,
    eliminarUsuario,
    comenzarEdicion,
    editando,
    setEditando,
  };
}
