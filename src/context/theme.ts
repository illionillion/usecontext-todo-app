import { createContext, useState } from "react";

export interface TodoType {
  isDone: boolean;
  todo: string;
  index: number;
}

export interface TodoContextType {
  currentIndex: number;
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  updateTodo: (index: number, updatedTodo: TodoType) => void;
  removeTodo: (index: number) => void;
  clearTodo: () => void;
}

const defaultContext: TodoContextType = {
  currentIndex: 0,
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  removeTodo: () => {},
  clearTodo: () => {},
};

export const todoContext = createContext<TodoContextType>(defaultContext);

export function useTodoContext() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const addTodo = (todo: TodoType) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setCurrentIndex((prev) => prev + 1);
  };

  const updateTodo = (index: number, newTodo: TodoType) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.index === index ? newTodo : todo))
    );
  };

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.index !== index));
  };

  const clearTodo = () => {
    setTodos([]);
  };

  const contextValue: TodoContextType = {
    currentIndex,
    todos,
    addTodo,
    updateTodo,
    removeTodo,
    clearTodo,
  };

  return contextValue;
}
