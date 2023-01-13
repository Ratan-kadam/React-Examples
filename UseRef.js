import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const reference = useRef(0);
  const [count, setCount] = useState(0);

  var handleClick = (e) => {
    setCount((count) => count + 1);
  };

  var handleClick1 = (e) => {
    console.log('reference clicked but render not caused');
    reference.current = reference.current + 1;
  };

  console.log('render called: getting last reference value', reference);
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      count {count}: <button onClick={handleClick}>click +</button>
      <button onClick={handleClick1}>click ref </button>
    </div>
  );
}
