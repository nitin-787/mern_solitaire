import React, { useState } from "react";

// functional component
const Hook = () => {
  // array destructuring
  // useSatate is a function (specifically a "hook")
  const [count, setCount] = useState(0);

  const increment = () => {
    // anonymous arrow func
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter Value: {count}</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement}>Decrement (-)</button>
      </div>
    </div>
  );
};

export default Hook;
