import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count == 1) {
      setDisable(true);
    }
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="border m-40 text-purple-500 bg-sky-900/10">
        <button className="text-[30px]" onClick={handleIncrement}>
          +
        </button>
        <h1>Count : {count}</h1>
        <button
          className={`text-[30px] ${disable ? "cursor-not-allowed":""}`}
          onClick={handleDecrement}
          disabled={disable}
        >
          -
        </button>
        <br />
        <button
          className="border p-1 mb-2 bg-purple-500/10"
          onClick={handleReset}
          disabled
        >
          Resetbtn
        </button>
      </div>
    </>
  );
}

export default Button;
