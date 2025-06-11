import { Card, CardContent, Typography, Button, Stack, Box } from '@mui/material';


const TaskItem = ({ task, onEdit, onDelete }) => {

  const formatTaskDate = (isoString) => {
    if (!isoString) {
      return ''
    }

    const date = new Date(isoString)
    const options = {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit'
    }

    const formattedDate = date.toLocaleDateString('pt-BR', options)
    return formattedDate.replace(/(\w+)\.,\s(.+)/, '$1, $2')

  }

  return (

    <Card variant='outlined' sx={{ mb: 2 }}>

      <CardContent>

        <Typography variant="h6">{task.title}</Typography>
        <Typography color="text.secondary">{task.description}</Typography>

        <Box
          display="flex"
          alignItems="center"
          sx={{ height: 90, gap: 16, mb: 2 }}
        >
          <Typography variant='outlined'>{task.status}</Typography>
          <Typography variant='outlined'>{"Criado em " + formatTaskDate(task.createdAt)}</Typography>
          <Typography variant='outlined'>{"Terminar em " + formatTaskDate(task.deadlineToFinish)}</Typography>
        </Box>

        <Stack direction="row" spacing={13} sx={{ mt: 2 }}>

          <Button variant='outlined' color='primary' onClick={() => onEdit(task)}> Editar </Button>
          <Button variant='outlined' color='secundary' onClick={() => onEdit(task)}> Concluir Tarefa </Button>
          <Button variant='outlined' color='primary' onClick={() => onDelete(task.id)}> Excluir </Button>

        </Stack>

      </CardContent>

    </Card>

  )
}

export default TaskItem