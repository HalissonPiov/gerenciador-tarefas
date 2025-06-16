import { useState, useEffect } from 'react'
import TaskForm from "./TaskForm"
import TaskList from './TaskList';
import { Container, Typography, TextField, Button, Stack } from '@mui/material';
import api from '../../services/api'


const TaskManager = () => {

  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [searchTitle, setSearchTitle] = useState('')

  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)


  const [status, setStatus] = useState('')
  const [deadlineToFinish, setDeadlineToFinish] = useState(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const res = await api.get("/task")
      setTasks(res.data);
    }
    catch (error) {
      console.log("Erro ao buscar tarefas: ", error)
      setTasks([])
    }
  }

  const handleCreate = async () => {
    try {
      const res = await api.post('/task', { title, description, deadlineToFinish });
      setTasks([...tasks, res.data])
      resetForm();
    } catch (error) {
      console.error('Erro ao criar tarefa:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await api.put(`/task/${editingId}`, { title, description, status, deadlineToFinish })
      setTasks(tasks.map(tarefa => tarefa.id === editingId ? res.data : tarefa))
      resetForm();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/task/${id}`)
      setTasks(tasks.filter(tarefa => tarefa.id !== id))
    }
    catch (error) {
      console.error('Erro ao excluir tarefa: ', error)
    }
  }

  const handleSearch = async () => {
    try {
      const res = await api.get(`/task?title=${searchTitle}`)
      setTasks(res.data)
    }
    catch (error) {
      console.log('Erro ao buscar tarefa:', error)
    }
  }

const handleCompleteTask = async (task) => {
  try {
    const res = await api.put(`/task/${task.id}`, {
      title: task.title,
      description: task.description,
      status: "Concluída",
      deadlineToFinish: task.deadlineToFinish
    })

    setTasks(tasks.map(t => t.id === task.id ? res.data : t))
  }
  catch (error) {
    console.error("Erro ao concluir a tarefa", error)
  }
}

  const prepareEdit = (task) => {
    setIsEditing(true)
    setEditingId(task.id)
    setTitle(task.title)
    setDescription(task.description)
    setStatus(task.status)
    setDeadlineToFinish(task.setDeadlineToFinish)
  }

  const resetForm = () => {
    setTitle("")
    setDescription("")
  }


  return (

    <Container maxWidth="sm" sx={{ mt: 5 }}>

      <Typography variant="h4" gutterBottom>Gerenciador de Tarefas</Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 10 }}>
        <TextField
          label="Buscar por título"
          variant="outlined"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          InputProps={{
            style: { background: "#666666", borderRadius: '8px' }
          }}
          InputLabelProps={{
            style: { color: "#ccc" }
          }}
          fullWidth
        />
        <Button variant='contained' onClick={handleSearch}>Buscar</Button>

      </Stack>

      <TaskForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        isEditing={isEditing}
        deadlineToFinish={deadlineToFinish}
        setDeadlineToFinish={setDeadlineToFinish}
      />

      <TaskList
        tasks={tasks}
        onEdit={prepareEdit}
        onDelete={handleDelete}
        onComplete={handleCompleteTask}
      />

    </Container>


  )
}

export default TaskManager