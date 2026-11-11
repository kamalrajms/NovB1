import React from "react";

export default function Hellow(props) {
  return (
    <div className="Hello">
      <h2>
        Hellow {props.firstName}--{props.age}
      </h2>
    </div>
  );
}
