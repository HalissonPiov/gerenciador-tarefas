import { Card, CardContent, Typography, Button, Stack } from '@mui/material';


const TaskItem = ({ task }) => {
  return (

    <Card variant='outlined' sx={{ mb: 2 }}>

      <CardContent>

        <Typography variant="h6">{task.title}</Typography>
        <Typography color="text.secondary">{task.description}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          {/* FUNÇÃO EDITAR TAREFA */}
          {/* FUNÇÃO EXCLUIR TAREFA */}
        </Stack>

      </CardContent>

    </Card>

  )
}

export default TaskItem