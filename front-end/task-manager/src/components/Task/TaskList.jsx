import TaskItem from './TaskItem';
import { Stack } from "@mui/material"


const TaskList = ({ tasks }) => {
  return (
    <Stack spacing={2}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </Stack>
  )
}

export default TaskList