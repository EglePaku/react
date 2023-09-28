import { useEffect, useState } from "react";
import { Todo } from "./types/todo";
import { fetchTodos } from "./api/todo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { Button, Typography } from "@mui/material";


const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sidebarItems, setSidebarItems] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos()
      .then((response) => {
        setTodos(response.slice(0, 12));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCompleteTodo = (todo: Todo) => {
    const updateTodo = (t: Todo) =>
      t.id === todo.id ? { ...t, completed: !todo.completed } : t;

    setTodos((prevTodos) => prevTodos.map(updateTodo));
  };

  // Function to add an item to the sidebar
  const addToSidebar = (todo: Todo) => {
    setSidebarItems([...sidebarItems, todo]);
  };

  // Function to clear all items from the sidebar
  const clearSidebar = () => {
    setSidebarItems([]);
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Ypatingi pasiūlymai</h2>
        <div className="product-wrap">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleComplete={() => handleCompleteTodo(todo)}
              addToSidebar={() => addToSidebar(todo)}
            />
          ))}
        </div>
      </div>
      <div className="sidebar">
        <h2>Krepšelis</h2>
        {sidebarItems.length > 0 ? ( // Check if sidebar is not empty
          <>
            {sidebarItems.map((item) => (
              <div key={item.id} className="sidebar-item-wrap">
                <img src={item.thumbnailUrl} alt={item.title} />
                <Typography variant="h6">{item.title}</Typography>
                <h5 className="price">{item.price}</h5>
              </div>
            ))}
            <div className="btn-wrap">
            <Button variant="contained" onClick={clearSidebar}>Pirkti</Button>
            </div>
          </>
        ) : (
          // Render "Sidebar Empty" text when the sidebar is empty
         <div className="placeholder">
           <img src="https://www.balt.net/uploads/news/id168/logo-barbora.png" alt="" />
          <span>Krepšelis tuščias</span>
         </div>
        )}
      </div>
    </div>
  );
};

export default App;





