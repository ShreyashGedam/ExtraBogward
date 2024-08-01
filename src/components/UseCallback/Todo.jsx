import { memo } from "react";

function Todo(props) {
  const { todo, addTodo } = props;

  console.log("rendering todo");

  return (
    <div>
      <div>
        {todo.map((e) => (
          <p>{e}</p>
        ))}
      </div>
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}

export default memo(Todo);
