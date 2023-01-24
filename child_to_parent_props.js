import React, { useState, useRef, memo } from 'react';
import { render } from 'react-dom';
import './style.css';

export function App() {
  const [count, setCount] = useState(0);
  const { render, childData, setChildData } = useChild(); // now childs childData and becomes parent property
  const { prop1 } = childData || {};

  return (
    <div>
      Memo demo
      <div>count: {count}</div>
      <div> parent accessing Child Value props1: {prop1} </div>
      <div> Above value is actually is of parent now.</div>
      <div> using child render from hooks: {render} </div>
    </div>
  );
}

const useChild = (props) => {
  const [childData, setChildData] = useState({ prop1: 100, prop2: 200 });

  const hanldleClick2 = () => {
    setChildData((props) => ({ ...props, prop1: props.prop1 + 1 }));
  };

  return {
    childData,
    setChildData,
    render: (
      <div style={{ backgroundColor: 'yellow' }}>
        child updating props {childData.prop1}
        <button onClick={hanldleClick2}>click</button>;
      </div>
    ),
  };
};

render(<App />, document.getElementById('root'));
