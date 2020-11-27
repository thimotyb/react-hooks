import React, { useEffect, useState } from "react";

export function useCounter({ initialState }) {
    const [count, setCount] = useState(initialState);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    useEffect(() => document.title = count, [count]);
    return [count, { increment, decrement }];
}