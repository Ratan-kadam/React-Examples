import React, { useState, useRef, memo } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

export function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const hanldleClick = () => {
    setCount((count) => count + 1);
  };

  const hanldleClick2 = () => {
    setCount1((count) => count1 + 1);
  };
  return (
    <div>
      Memo demo
      <div>count: {count}</div>
      <Child count1={count1}> </Child>
      <button onClick={hanldleClick}>click to render parent</button>
      <button onClick={hanldleClick2}>click to render child</button>
    </div>
  );
}

const Child = memo((props) => {
  const renderCounter = useRef(0);
  const { count1 } = props;
  console.log('child render:', count1);
  renderCounter.current = renderCounter.current + 1;
  return <div>child: rendering {renderCounter.current}</div>;
});

render(<App />, document.getElementById('root'));
