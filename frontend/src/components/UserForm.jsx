import { Box, TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@mui/material';

export const UserForm = ({ formData, setFormData, departamentos, manejarSubmit, editando }) => {

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <TextField label="Nombre" name="nombre" fullWidth value={formData.nombre} onChange={handleChange} style={{ marginTop: 10 }} />
            <TextField label="Apellido" name="apellido" fullWidth value={formData.apellido} onChange={handleChange} style={{ marginTop: 10 }} />
            <TextField label="Edad" name="edad" fullWidth value={formData.edad} onChange={handleChange} style={{ marginTop: 10 }} />
            <Box sx={{ minWidth: 120, marginTop: 5 }}>
                <FormControl fullWidth>
                    <InputLabel id="departamento-label">Departamento</InputLabel>
                    <Select
                        labelId="departamento-label"
                        name="departamento"
                        value={formData.departamento}
                        label="Departamento"
                        onChange={handleChange}
                    >
                        {departamentos.map(dep => (
                            <MenuItem key={dep.id} value={dep.id}>{dep.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <TextField label="Email" name="email" fullWidth value={formData.email} onChange={handleChange} style={{ marginTop: 10 }} />
            <Button variant="contained" onClick={manejarSubmit} style={{ marginTop: 10 }}>
                {editando ? 'Actualizar' : 'Crear'}
            </Button>
        </>
    )
}
