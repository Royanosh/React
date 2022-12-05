import React, { useState } from "react";

const CounterByPreviousState = () => {
  const [count, setCount] = useState(0);
  const initialState = 0;
  const increaseFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousState) => previousState + 1);
    }
  };
  return (
    <>
      <h1>Count {count}</h1>
      <div>
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount((previousState) => previousState + 1)}>
          Increase
        </button>
        <button onClick={() => setCount((previousState) => previousState - 1)}>
          Decrease
        </button>
        <button onClick={increaseFive}>Increase Five</button>
      </div>
    </>
  );
};

export default CounterByPreviousState;
