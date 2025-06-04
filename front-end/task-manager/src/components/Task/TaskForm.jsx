import { TextField, Button, Stack } from '@mui/material'


const TaskForm = ({ title, setTitle, description, setDescription, onCreate, onUpdate, isEditing }) => {
  return (

    <Stack spacing={2} sx={{ mb: 3 }}>
      <TextField
        label="Nome da tarefa"
        variant='outlined'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        InputProps={{
          style: { background: "#666666" }
        }}
        InputLabelProps={{
          style: { color: "#ccc" }
        }}
      />
      <TextField
        label="Descrição"
        variant='outlined'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        InputProps={{
          style: { background: "#666666" }
        }}
        InputLabelProps={{
          style: { color: "#ccc" }
        }}
      />
      <Button
        variant="contained"
        color={isEditing ? 'warning' : 'primary'}
        onClick={isEditing ? onUpdate : onCreate}
      >
        {isEditing ? 'Atualizar' : 'Criar'}
      </Button>

    </Stack>

  )
}

export default TaskForm