"use client";

import { useState } from "react";

export default function page() {
  console.log("client component");
  const [name, setName] = useState("Nimas");

  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
}
