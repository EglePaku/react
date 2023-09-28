import { Box, Typography } from "@mui/material";
import { Todo } from "../types/todo";
import DoneIcon from "@mui/icons-material/Done";

// PROPS!!!
interface TodoItemProps {
  todo: Todo;
  handleComplete: () => void;
}

// const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
const TodoItem = ({ todo, handleComplete }: TodoItemProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1} onClick={handleComplete}>
      <Typography>{todo.title}</Typography>
      <DoneIcon color={todo.completed ? "success" : "error"} />
    </Box>
  );
};

export default TodoItem;