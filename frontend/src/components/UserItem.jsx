import { Button, ListItem } from "@mui/material"

export const UserItem = ({usuario, onEdit, onDelete}) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <Button variant="contained" onClick={onEdit} style={{ marginTop: 10 }}>Editar</Button>
          <Button variant="contained" onClick={onDelete} style={{ marginTop: 10, marginLeft: 5 }}>Eliminar</Button>
        </>
      }
    >
      {usuario.nombre} {usuario.apellido} - {usuario.departamento} - {usuario.correo}
    </ListItem>
  )
}
