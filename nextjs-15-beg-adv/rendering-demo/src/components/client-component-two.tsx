"use client";

import React from "react";
import { useState } from "react";

export default function ClientComponentTwo() {
  const [name, setName] = useState("Batman");

  return <div>ClientComponentTwo</div>;
}
