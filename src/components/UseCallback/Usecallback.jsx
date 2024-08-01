import { useCallback, useState } from "react";
import Todo from "./Todo";

export default function Usecallback() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(["val", "val"]);

  const addTodo = () => {
    setTodo([...todo, "shryash"]);
  };

  const addTodoNew = useCallback(() => {
    return addTodo();
  }, [todo]);

  return (
    <div>
      <Todo todo={todo} addTodo={addTodoNew} />
      <hr />
      <h2>{count}</h2>
      <br />
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}
