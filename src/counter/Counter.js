import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handelIncrement = () => {
    setCounter(counter + 1);
  };
  const handelDecrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
