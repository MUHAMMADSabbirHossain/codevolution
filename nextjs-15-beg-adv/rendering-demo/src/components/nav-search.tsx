"use client";

import { useState } from "react";

export default function NavSearch() {
  console.log(`NavSearch rendered`);

  const [first, setFirst] = useState<string>("");

  // Since server components can’t handle state and interactivity, we need client components to fill this gap.

  // The key recommendation here is to position these client components lower in your component tree.

  return (
    <div>
      NavSearch <input type="text" />
    </div>
  );
}
