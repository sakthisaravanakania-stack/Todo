import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (todoName, todoDesc) => {
    const newTodo = {
      id: Date.now(),
      todoName: todoName,
      todoDesc: todoDesc,
      status: "Not Completed",
    };

    setTodos([...todos, newTodo]);
  };


  const updateTodoStatus = (todoStatus, todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, status: todoStatus }
          : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(
      todos.filter((todo) => todo.id !== todoId)
    );
  };

  
  const editTodo = (newName, newDesc, todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              todoName: newName,
              todoDesc: newDesc,
            }
          : todo
      )
    );
  };

  
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    }

    return todo.status === filter;
  });

  return (
    <div className="container">
      <Header addTodo={addTodo} />

      <Main
        todos={filteredTodos}
        updateTodoStatus={updateTodoStatus}
        setFilter={setFilter}
        filter={filter}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;


