import { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, IconButton, Select, MenuItem, InputLabel, Box, FormControl } from '@mui/material';
// import { Delete, Edit, } from '@mui/icons-material';
import axios from 'axios';

import {UserForm} from './components/UserForm';
import {UserItem} from './components/UserItem';
import {useUsuarios} from './hooks/useUsuarios';

const API_URL = 'http://localhost:3001/usuarios';

function App() {

  const {
    usuarios, 
    departamentos,
    formData,
    editando,
    setFormData,
    manejarSubmit,
    eliminarUsuario,
    comenzarEdicion,

  } = useUsuarios();

  return (
    <Container className='formas'>
      <Typography variant="h4" gutterBottom>Gestión de Usuarios</Typography>
      
      <UserForm
        formData={formData}
        setFormData={setFormData}
        departamentos={departamentos}
        manejarSubmit={manejarSubmit}
        editando={editando}
      />

      <List>
        {usuarios.map(usuario => (
          <UserItem
            key={usuario.id}
            usuario={usuario}
            onEdit={() => comenzarEdicion(usuario)}
            onDelete={() => eliminarUsuario(usuario.id)}
          />
        ))}
      </List>
      
    </Container>
  );
}

export default App;
