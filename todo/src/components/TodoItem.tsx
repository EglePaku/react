import { Box, Typography, Button } from "@mui/material";
// import React from "react";

type TodoItemProps = {
  todo: {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
    price: number;
    thumbnailUrl: string; // Add 'thumbnailUrl' property
  };
  handleComplete: () => void;
  addToSidebar: () => void; // Pass this function from App to handle adding to sidebar
};

const TodoItem = ({ todo, handleComplete, addToSidebar }: TodoItemProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1} onClick={handleComplete}>
      <img src={todo.thumbnailUrl} alt={todo.title} />
      <Typography variant="h6">{todo.title}</Typography>
      <Typography className="price">{todo.price}</Typography>
      {/* Call the addToSidebar function passed from App */}
      <Button variant="contained" onClick={addToSidebar}>
        Į krepšelį
      </Button>
    </Box>
  );
};

export default TodoItem;
