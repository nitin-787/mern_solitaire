import React, { useState, useEffect } from "react";

const UseEffectScenarios = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // SCENARIO 1: No Dependency Array
  useEffect(() => {
    console.log("1. Runs on every render (Initial + Any State Change)");
  });

  // SCENARIO 2: Empty Dependency Array []
  // Runs ONLY Once (On Mount)
  useEffect(() => {
    console.log("2. Runs ONLY ONCE when component mounts");
  }, []);

  // SCENARIO 3: With Dependencies [count]
  // Runs on Mount + When 'count' changes
  useEffect(() => {
    console.log(`3. Runs when 'count' changes. Current count: ${count}`);
  }, [count]);

  // SCENARIO 4: Cleanup Function (Component Will Unmount)
  // Runs when component is removed or before re-running the effect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("4. Timer running...");
    }, 1000);

    // Cleanup function
    return () => {
      console.log(
        "4. Cleanup: Stopping Timer (Component Unmounted or Re-rendering)",
      );
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useEffect Scenarios</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Increment Count: {count}
        </button>
      </div>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type to trigger re-renders"
        />
        <p>Text State: {text}</p>
      </div>
    </div>
  );
};

export default UseEffectScenarios;
