function Throtlling() {
  let timer = true;

  function reload() {
    if (timer === true) {
      console.log("reloading.....");

      timer = false;

      setTimeout(() => {
        timer = true;
      }, 3000);
    }
  }

  return (
    <div>
      <button onClick={reload}>Click</button>
    </div>
  );
}

export default Throtlling;
