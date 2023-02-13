import React, { useRef } from 'react';
import './style.css';
import Child from './Child.js';

export default function App() {
  console.log('parent render');
  const childRef = useRef(null); // created a reference variable;

  const functionParent = function () {
    childRef.current.childFunc();
  };

  return (
    <div>
      <h1>Hello Parent!</h1>
      <button onClick={functionParent}> Parent Button</button>
      <Child test="123" ref={childRef} />
    </div>
  );
}

// create below child component in different file

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './style.css';

function Child(props, ref) {
  console.log('ref', ref, 'prop:', props);
  const [counter, setCounter] = useState(0);

  const childFunc = () => {
    setCounter((c) => c + 1);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        childFunc: childFunc,
      };
    },
    []
  );

  return (
    <div>
      <h1>Hello Child!</h1>
      <button onClick={childFunc}> child Button</button>
      <p> counter: {counter}</p>
    </div>
  );
}

export default forwardRef(Child);
