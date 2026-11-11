import React from "react";
import Style from "./ListRender.module.css"

export default function Listrender() {
  const fruits = ["apple", "banana", "orange", "hjbfjbf", "wjehfvewhfb"];

  const user = [
    { id: 1, name: "kumar" },
    { id: 2, name: "kamalesh" },
    { id: 3, name: "dravid" },
  ];
  return (
    <div className={Style.listRender}>
      <h2>List rendering</h2>
      {fruits.map((name, ind) => (
        <div key={ind}>
          <h3>{name}</h3>
        </div>
      ))}
      <h2>user data</h2>
      {/* person={ id: 1, name: "kumar" } */}
      {user.map((person) => (
        <div key={person.id}>
          <h3>id:{person.id}</h3>
          <h3>name:{person.name}</h3>
        </div>
      ))}
    </div>
  );
}
