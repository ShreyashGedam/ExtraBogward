import { useState } from "react";

function Higher(WraperComponent) {
  function innerComp() {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    return (
      <WraperComponent count={count} increment={increment}></WraperComponent>
    );
  }

  return innerComp;
}

export default Higher;
