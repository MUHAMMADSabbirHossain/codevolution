// "use client";

// import { useState } from "react";
import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

export default function Navbar() {
  console.log(`Navbar rendered`);

  //   const [first, setFirst] = useState("");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
}
