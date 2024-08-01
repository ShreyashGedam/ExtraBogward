import { useMemo, useState } from "react";
import "./UseMemo.css";

export const Usememo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // const value = newValueChange();

  // its is used to return a value
  const value = useMemo(() => {
    // return newValueChange();
    for (let i = 0; i < 1000000000; i++) {}
    console.log("HELLLOOOOO");
    return count;
  }, [count]);

  const handlClick = () => {
    setShow(!show);
  };

  function newValueChange() {
    for (let i = 0; i < 1000000000; i++) {}
    console.log("HELLLOOOOO");
    return count;
  }

  return (
    <div>
      <h2>{value}</h2>
      <br />
      <button onClick={() => setCount(count + 1)}>Add</button>
      <br />
      <br />
      <br />
      {show ? (
        <button onClick={handlClick}>Nandani</button>
      ) : (
        <button onClick={handlClick}>Vijaya</button>
      )}
    </div>
  );
};
