import { useState, useEffect } from 'react'
import TaskForm from "./TaskForm"
import TaskList from './TaskList';
import { Container, Typography, TextField, Button, Stack } from '@mui/material';
import axios from 'axios';


const TaskManager = () => {

  // const [tasks, setTasks] = useState([])
  // Dados mockados
  const [tasks, setTasks] = useState([
    { id: 1, title: "Título de uma Tarefa de Exemplo", description: "Realizar 10 questões da lista 3 de engenharia de software, utilizando o livro " }
  ])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [searchTitle, setSearchTitle] = useState('')
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // useEffect(() => {
  //   fetchTasks()
  // }, [])

  // const fetchTasks = async () => {
  //   try{
  //     const res = await axios.get("/task")
  //     setTasks(res.data);
  //   }
  //   catch(error){
  //     console.log("Erro ao buscar tarefas: ", error)
  //     setTasks([])
  //   }
  // }

  const handleCreate = async () => {
    const res = await axios.post('/task', { title, description })
    setTasks([...tasks, res.data])
    resetForm()
  }

  const handleUpdate = async () => {
    const res = await axios.put('/task/${editingId}', { title, description })
    setTasks(tasks.map(tarefa => tarefa.id === editingId ? res.data : tarefa))
    resetForm();
  }

  const prepareEdit = (task) => {
    setIsEditing(true)
    setEditingId(task.id)
    setTitle(task.title)
    setDescription(task.description)
  }

  const handleDelete = async (id) => {
    await axios.delete('/task/${id}')
    setTasks(tasks.filter(tarefa => tarefa.id !== id))
  }

  const handleSearch = async () => {
    const res = await axios.get('/task?title=${searchTitle}')
    setTasks(res.data)
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
            style: { background: "#666666" }
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
      />

      <TaskList
        tasks={tasks}
        onEdit={prepareEdit}
        onDelete={handleDelete}
      />

    </Container>


  )
}

export default TaskManager