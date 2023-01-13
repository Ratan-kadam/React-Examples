import React, { useMemo, useEffect, useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  let expensiveValue = useRef(0);
  const result = useMemo(() => expensive(count), [count]); // for each render DOES NOT gets calculated
  // const result = expensive(count); // gets calculated on each render

  function expensive() {
    console.log('count changed so runningc');
    var sum = 0;

    for (var i = 0; i < 10000; i++) {
      expensiveValue.current += i;
    }

    console.log('now completed');

    expensiveValue.current = sum;
  }

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleClick1 = () => {
    setCount1((count1) => count1 + 1);
  };

  return (
    <div>
      <h1>useMemoExample</h1>
      <p>Sum: {expensiveValue.current}</p>
      <button onClick={handleClick}> Re-calculate </button>
      <button onClick={handleClick1}> Re-calculate1 </button>
    </div>
  );
}
