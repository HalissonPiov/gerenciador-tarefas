import { Card, CardContent, Typography, Button, Stack } from '@mui/material';


const TaskItem = ({ task, onEdit, onDelete }) => {
  return (

    <Card variant='outlined' sx={{ mb: 2 }}>

      <CardContent>

        <Typography variant="h6">{task.title}</Typography>
        <Typography color="text.secondary">{task.description}</Typography>
        
        <Stack direction="row" spacing={44} sx={{ mt: 2 }}>

          <Button variant='outlined' color='primary' onClick={() => onEdit(task)}> Editar </Button>
          <Button variant='outlined' color='primary' onClick={() => onDelete(task.id)}> Excluir </Button>

        </Stack>

      </CardContent>

    </Card>

  )
}

export default TaskItem