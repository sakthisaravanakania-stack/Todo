import TodoCard from "./TodoCard";

const Main = ({
  todos,
  updateTodoStatus,
  setFilter,
  filter,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="main">

      <div className="top-bar">

        <h2>📝 My Todos</h2>

        <div>
          <label>Status Filter: </label>

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option value="all">All</option>

            <option value="Completed">
              Completed
            </option>

            <option value="Not Completed">
              Not Completed
            </option>
          </select>
        </div>

      </div>

      <div className="todo-container">

        {todos.length === 0 ? (
          <h3 className="welcome">
            🎯 No Todos Found
          </h3>
        ) : (
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              updateTodoStatus={updateTodoStatus}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        )}

      </div>

    </div>
  );
};

export default Main;