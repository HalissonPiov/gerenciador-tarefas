import TaskItem from './TaskItem';
import { Stack } from "@mui/material"


const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <Stack spacing={2}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  )
}

export default TaskList