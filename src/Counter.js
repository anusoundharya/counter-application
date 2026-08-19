import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter-app">
      <div className="counter-card">
        <h1>Smart Counter</h1>
        <p>React Hooks Counter Application</p>

        <div className="count">{count}</div>

        <select value={step} onChange={e => setStep(Number(e.target.value))}>
          <option value="1">Step 1</option>
          <option value="2">Step 2</option>
          <option value="5">Step 5</option>
          <option value="10">Step 10</option>
        </select>

        <div className="buttons">
          <button onClick={() => setCount(count - step)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={() => setCount(count + step)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
