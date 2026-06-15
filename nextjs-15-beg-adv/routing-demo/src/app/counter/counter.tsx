"use client";

import React, { useState } from "react";

export default function Counter(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
