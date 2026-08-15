import { useState } from "react";
import { TODOS } from "@/helper/todos";

const useTodos = () => {
  const [todos, setTodos] = useState(TODOS);

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedFields) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo,
      ),
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};

export default useTodos;
