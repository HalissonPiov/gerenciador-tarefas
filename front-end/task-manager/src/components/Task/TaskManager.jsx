import { useState, useEffect } from 'react'
import TaskForm from "./TaskForm"
import TaskList from './TaskList';
import { Container, Typography, TextField, Button, Stack } from '@mui/material';
import axios from 'axios';


const TaskManager = () => {

  // const [tasks, setTasks] = useState([])

  // Dados mockados
  const [tasks, setTasks] = useState([
    { id: 1, title: "Título de uma Tarefa de Exemplo", description: "Terminar a lista 3 de engenharia de software" }
  ])

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [searchTitle, setSearchTitle] = useState('')

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

  const resetForm = () => {
    setTitle("")
    setDescription("")
  }

  return (

    <Container maxWidth="sm" sx={{ mt: 5 }}>

      <Typography variant="h4" gutterBottom>Gerenciador de Tarefas</Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
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

      </Stack>

      <TaskForm

        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        onCreate={handleCreate}
      />

      <TaskList
        tasks={tasks}
      />

    </Container>


  )
}

export default TaskManager