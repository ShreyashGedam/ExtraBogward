import React from "react";

function Debouncing() {
  let timer;

  function debounce() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      console.log("searching");
    }, 2000);
  }

  return (
    <div>
      <input type="text" placeholder="search" onChange={debounce} />
    </div>
  );
}

export default Debouncing;
