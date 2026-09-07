import { useState } from "react";

const TodoCard = ({
  todo,
  updateTodoStatus,
  deleteTodo,
  editTodo,
}) => {

  const [isEdit, setIsEdit] = useState(false);

  const [todoName, setTodoName] = useState(
    todo.todoName
  );

  const [todoDesc, setTodoDesc] = useState(
    todo.todoDesc
  );

  
  const handleUpdate = () => {

    if (
      todoName.trim() === "" ||
      todoDesc.trim() === ""
    ) {
      return;
    }

    editTodo(
      todoName,
      todoDesc,
      todo.id
    );

    setIsEdit(false);
  };

  return (
    <div className="todo-card">

      {isEdit ? (

        <>
          <h3>✏️ Edit Todo</h3>

          <label>Name:</label>

          <input
            type="text"
            value={todoName}
            onChange={(e) =>
              setTodoName(e.target.value)
            }
          />

          <label>Description:</label>

          <input
            type="text"
            value={todoDesc}
            onChange={(e) =>
              setTodoDesc(e.target.value)
            }
          />
        </>

      ) : (

        <>
          <h3>📌 {todo.todoName}</h3>

          <p>
            <strong>Description:</strong>{" "}
            {todo.todoDesc}
          </p>
        </>

      )}

      {/* STATUS */}

      <div className="status-section">

        <label>Status:</label>

        <select
          value={todo.status}
          onChange={(e) =>
            updateTodoStatus(
              e.target.value,
              todo.id
            )
          }
          className={
            todo.status === "Completed"
              ? "completed"
              : "not-completed"
          }
        >
          <option value="Completed">
            Completed
          </option>

          <option value="Not Completed">
            Not Completed
          </option>
        </select>

      </div>

      {/* BUTTONS */}

      <div className="btn-container">

        {isEdit ? (

          <button
            className="update-btn"
            onClick={handleUpdate}
          >
            💾 Update
          </button>

        ) : (

          <button
            className="edit-btn"
            onClick={() => setIsEdit(true)}
          >
            ✏️ Edit
          </button>

        )}

        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          🗑️ Delete
        </button>

      </div>

    </div>
  );
};

export default TodoCard;