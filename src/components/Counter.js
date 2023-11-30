import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="main-container">
      <h2 className="head">Count:{<span>{value}</span>}</h2>
      <div className="button-container">
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;
