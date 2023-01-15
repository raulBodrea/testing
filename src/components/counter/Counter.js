import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <button onClick={() => setCount(count - 1)}>-</button>
      <h2>Current count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
