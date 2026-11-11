import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "20px",
      }}
    >
        {/* dark= f */}
        {/* dark1=t  */}
        {/* dark2= f */}
        {/* dark3= t */}
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "light" : "dark"} mode
      </button>
      <h3>You are in {dark ? "dark" : "light"} mode</h3>
    </div>
  );
}

// !true == false
// !false == true