import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  console.log(name);
  console.log(checkbox);

  return (
    <div>
      <h2>Field component</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Name:{name}</h2>

      <h2>check box</h2>
      <label>check box</label>
      <input
        type="checkbox"
        checked={checkbox}
        onChange={(e) => setCheckBox(e.target.checked)}
      />
    </div>
  );
}
