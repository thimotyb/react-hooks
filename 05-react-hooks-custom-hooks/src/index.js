import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function useCounter({ initialState }) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  useEffect(() => document.title = count);
  return [count, { increment, decrement }];
}

function App() {
  const [myCount, { increment, decrement }] = useCounter({ initialState: 0 });
  return (
    <div>
      <p>{myCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <InternalCounter/>
      <InternalCounter/>
    </div>
  );
}

function InternalCounter() {
  const [internalCount, { increment, decrement }] = useCounter({ initialState: 100 });
  return (
    <div style={{backgroundColor: "red"}}>
      <p>{internalCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
