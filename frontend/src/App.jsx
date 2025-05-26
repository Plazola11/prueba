import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, IconButton, Select, MenuItem, InputLabel, Box, FormControl } from '@mui/material';
// import { Delete, Edit, } from '@mui/icons-material';
import axios from 'axios';

const API_URL = 'http://localhost:3001/usuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [email, setEmail] = useState('');
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then(res => setUsuarios(res.data));
  }, []);

  const handleChange = (event) => {
    setDepartamento(event.target.value);
  };

  const manejarSubmit = async () => {
    if (!nombre || !email) return;
    if (editando !== null) {
      await axios.put(`${API_URL}/${editando}`, { nombre, email });
      setEditando(null);
    } else {
      await axios.post(API_URL, { nombre, email });
    }
    const res = await axios.get(API_URL);
    setUsuarios(res.data);
    setNombre('');
    setEmail('');
  };

  const eliminarUsuario = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setUsuarios(usuarios.filter(u => u.id !== id));
  };

  const comenzarEdicion = (usuario) => {
    setNombre(usuario.nombre);
    setEmail(usuario.email);
    setEditando(usuario.id);
  };

  return (
    <Container className='formas'>
      <Typography variant="h4" gutterBottom>Gestión de Usuarios</Typography>
      <TextField label="Nombre" fullWidth value={nombre} onChange={e => setNombre(e.target.value)} style={{ marginTop: 10 }} />
      <TextField label="Apellido" fullWidth value={apellido} onChange={e => setApellido(e.target.value)} style={{ marginTop: 10 }} />
      <TextField label="Edad" fullWidth value={edad} onChange={e => setEdad(e.target.value)} style={{ marginTop: 10 }} />



      <Box sx={{ minWidth: 120, marginTop:5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={departamento}
            label="Departamento"
            onChange={handleChange}
          >
            <MenuItem value={10}>Desarrollo</MenuItem>
            <MenuItem value={20}>Juridico</MenuItem>
            <MenuItem value={30}>Finanzas</MenuItem>
            <MenuItem value={40}>Recursos Humanos</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <InputLabel id="demo-simple-select-label">Departamento</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        value={departamento}
        label="Departamento"
        onChange={handleChange}
      >
        <MenuItem value={10}>Desarrollo</MenuItem>
        <MenuItem value={20}>Juridico</MenuItem>
        <MenuItem value={30}>Finanzas</MenuItem>
        <MenuItem value={30}>Recursos Humanos</MenuItem>
      </Select> */}
      
      <TextField label="Email" fullWidth value={email} onChange={e => setEmail(e.target.value)} style={{ marginTop: 10 }} />
      <Button variant="contained" onClick={manejarSubmit} style={{ marginTop: 10 }}>
        {editando ? 'Actualizar' : 'Crear'}
      </Button>
      <List>
        {usuarios.map(usuario => (
          <ListItem
            key={usuario.id}
            secondaryAction={
              <>
                <Button variant='contained' onClick={() => comenzarEdicion(usuario)} style={{ marginTop: 10 }}>Editar</Button>
                <Button variant='contained' onClick={() => eliminarUsuario(usuario.id)} style={{ marginTop: 10, marginLeft: 5 }}>Eliminar</Button>
                {/* <IconButton onClick={() => comenzarEdicion(usuario)}></IconButton>
                <IconButton onClick={() => eliminarUsuario(usuario.id)}></IconButton> */}
              </>
            }
          >
            {usuario.nombre} - {usuario.email}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
