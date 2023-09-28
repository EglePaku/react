import { useEffect, useState } from "react";
import { Todo } from "./types/todo";
import { fetchTodos } from "./api/todo";
import TodoItem from "./components/TodoItem";
import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // nurodyti tipa jeigu tai yra masyvas arba objektas
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    fetchTodos()
      .then((response) => {
        setTodos(response.slice(0, 10));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCompleteTodo = (todo: Todo) => {
    const updateTodo = (t: Todo) =>
      t.id === todo.id ? { ...t, completed: !todo.completed } : t;
    setTodos((prevTodos) => prevTodos.map(updateTodo));
  };

  const handleAddTodo = () => {
    if (!todoInput) return;

    const newTodo: Todo = {
      userId: 1,
      id: Date.now(),
      title: todoInput,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput("");
  };

  return (
    <Box width={500} margin="0 auto" pt={4}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4">Todos</Typography>
        <Divider sx={{ my: 2 }} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleComplete={() => handleCompleteTodo(todo)}
          />
        ))}
        <Divider sx={{ my: 2 }} />
        <Box display="flex" gap={1}>
          <TextField
            label="Todo"
            placeholder="Todo..."
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleAddTodo}>
            Add
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default App;