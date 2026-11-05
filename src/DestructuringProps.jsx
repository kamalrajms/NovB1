import React from "react";

export default function DestructuringProps({name,age,city}) {
  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>city:{city}</h2>
    </div>
  );
}
