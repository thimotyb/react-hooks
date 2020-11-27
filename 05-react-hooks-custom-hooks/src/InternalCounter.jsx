import React from "react";
import "./styles.css";
import { useCounter } from './useCounter';

const InternalCounter = (props) => {
    const [internalCount, { increment, decrement }] = useCounter({ initialState: 100 });
    return (
      <div style={{backgroundColor: props.backgroundColor}}>
        <p>{internalCount}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    )
  }

  export default InternalCounter;