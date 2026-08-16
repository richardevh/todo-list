import { useState, useEffect } from "react";

export type TaskStatus = "todo" | "doing" | "done";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

const STORAGE_KEY = "todos";

export const useStorage = () => {
  // 1. Obtener datos iniciales desde localStorage o [] si no existen o hay error
  const [todos, setTodos] = useState<Task[]>(() => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return [];
    }
  });

  // 2. Sincronizar automáticamente con localStorage cada vez que `todos` cambie
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [todos]);

  // Leer manualmente de localStorage
  const retrieveStorage = (): Task[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      const parsed: Task[] = data ? JSON.parse(data) : [];
      setTodos(parsed);
      return parsed;
    } catch (error) {
      console.error("Error retrieving from localStorage:", error);
      return [];
    }
  };

  // Sobrescribir todo el almacenamiento
  const saveStorage = (newTodos: Task[]) => {
    setTodos(newTodos);
  };

  const generateId = () => {
    const d = new Date();
    return `${d.getHours()}${d.getMinutes()}${d.getSeconds()}-${d.getDate()}${d.getMonth()}-${d.getFullYear()}-${d.getMilliseconds()}`;
  };

  // Agregar una nueva tarea
  const addTodo = (newTask: {
    title: string;
    description?: string;
    status?: TaskStatus;
    id: string;
  }) => {
    const item: Task = {
      id: generateId(),
      title: newTask.title,
      description: newTask.description ?? "",
      status: newTask.status ?? "todo",
    };
    setTodos((prev) => [item, ...prev]);
  };

  // Actualizar/Editar una tarea por id
  const updateTodo = (id: string, updatedFields: Partial<Task>) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updatedFields } : todo,
      ),
    );
  };

  // Eliminar una tarea por id
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    value: todos,
    todos,
    retrieveStorage,
    saveStorage,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useStorage;
