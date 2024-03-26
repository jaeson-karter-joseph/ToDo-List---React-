import { useEffect, useState } from "react"
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const addTodo = (title: string) => {
    setTodos((currentTodos) => {
      return [...currentTodos, {
        id: Math.random().toString(),
        title,
        completed: false
      }]
    })
  }

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo;
      })
    })
  }

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
    </>
  )
}

export default App
