import { TextField, Button, Stack } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const TaskForm = ({ title, setTitle, description, setDescription, onCreate, onUpdate, isEditing, deadlineToFinish, setDeadlineToFinish }) => {
  return (

    <Stack spacing={2} sx={{ mb: 3 }}>
      <TextField
        label="Nome da tarefa"
        variant='outlined'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        InputProps={{
          style: { background: "#666666", borderRadius: '8px' }
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
          style: { background: "#666666", borderRadius: '8px' },
        }}
        InputLabelProps={{
          style: { color: "#ccc" }
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Prazo para Conclusão"
          value={deadlineToFinish}
          onChange={(newValue) => setDeadlineToFinish(newValue)}
          format='DD/MM/YYYY'
          sx={{
            backgroundColor: '#666666',
            borderRadius: '8px',
            '& .MuiInputLabel-root': {
              color: '#ccc' // Cor do label
            }
          }}
        />
      </LocalizationProvider>
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