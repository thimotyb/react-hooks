// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { useCounter } from './useCounter';
import InternalCounter from './InternalCounter';

function App() {
  const [myCount, { increment, decrement }] = useCounter({ initialState: 0 });
  return (
    <div>
      <p>{myCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <InternalCounter backgroundColor="red" />
      <InternalCounter backgroundColor="aqua" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
