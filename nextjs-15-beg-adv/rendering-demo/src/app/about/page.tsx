// import { useState } from "react";

export default function AboutPage() {
  //   const [first, setFirst] = useState(0); // You're importing a module that depends on `useState` into a React Server Component module. This API is only available in Client Components. To fix, mark the file (or its parent) with the `"use client"` directive.
  console.log("About server component.");

  return (
    <>
      <h1>About Page</h1>;
    </>
  );
}
