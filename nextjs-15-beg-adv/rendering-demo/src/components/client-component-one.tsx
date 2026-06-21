"use client";

import React from "react";
import { useState } from "react";
import ClientComponentTwo from "./client-component-two";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Batman");

  return (
    <div>
      ClientComponentOne
      <ClientComponentTwo />
      {children}
    </div>
  );
}
