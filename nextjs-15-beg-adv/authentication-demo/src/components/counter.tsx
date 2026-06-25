"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (
    !isLoaded ||
    // !userId||
    !isSignedIn
  ) {
    return null;
  }

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
