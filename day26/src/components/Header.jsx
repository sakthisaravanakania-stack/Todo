import { useState } from "react";

const Header = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDesc, setTodoDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      todoName.trim() === "" ||
      todoDesc.trim() === ""
    ) {
      return;
    }

    addTodo(todoName, todoDesc);

    setTodoName("");
    setTodoDesc("");
  };

  return (
    <div className="header">
      <h1>✨ Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) =>
            setTodoName(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Todo Description"
          value={todoDesc}
          onChange={(e) =>
            setTodoDesc(e.target.value)
          }
        />

        <button type="submit">
          ➕ Add Todo
        </button>
      </form>
    </div>
  );
};

export default Header;