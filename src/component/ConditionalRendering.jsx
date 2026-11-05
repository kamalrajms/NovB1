import React from "react";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div>
      <h2>conditional rendering</h2>
      <h3>ternary</h3>
      {user ? <h3>welcome back.....!!!!!!!</h3> : <h3>please login...!!!</h3>}
      <h3>logical</h3>
      {user && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, magnam!
          Consequatur eos architecto voluptatibus ducimus dolorum fuga
          repellendus accusantium aliquid soluta ratione ipsam quibusdam, cum
          cupiditate? Maiores voluptatem aliquam explicabo?
        </p>
      )}
    </div>
  );
}
