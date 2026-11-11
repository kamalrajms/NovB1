import React from "react";
import "./Destructre.css";

export default function DestructuringProps({ name, age, city }) {
  return (
    <div className="destructure">
      <h2>Name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>city:{city}</h2>
    </div>
  );
}
