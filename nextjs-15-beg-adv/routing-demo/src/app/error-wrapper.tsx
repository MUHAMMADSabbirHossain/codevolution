"use client";

import "./globals.css";
import { useState } from "react";

const ErrorSimulator = ({ message = "An error has occured" }) => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error(message);
  }

  return (
    <>
      <button
        title="Simulate an error"
        className="bg-red-950 text-red-500"
        onClick={() => setError(true)}
      >
        Simulate Error
      </button>
    </>
  );
};

export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div>
          <ErrorSimulator />
        </div>
        {children}
      </div>
    </>
  );
}
