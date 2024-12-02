import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h3>Counter</h3>
      <p>Current Count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
