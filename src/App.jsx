import React from "react";
import Greeting from "./Greeting";
import Hellow from "./Hellow";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./component/ConditionalRendering";
import Listrender from "./component/Listrender";
import ObjectStyle from "./component/ObjectStyle";
import UseStateHook from "./component/UseStateHook";
import DarkMode from "./component/DarkMode";
import Field from "./component/Field";
import RegForm from "./component/RegForm";
import ConditionalFrom from "./component/ConditionalFrom";
import UseEffectHook from "./component/UseEffectHook";

export default function App() {
  const name = "rahul";
  const age = 1;
  const city = "namakkal";
  const name2 = "kumar";
  const age2 = 12312344;
  const city2 = "chennai";
  const name3 = "ravi";
  const age3 = 12309876544;
  const city3 = "salem";

  return (
    <div>
      <UseEffectHook/>
      <ConditionalFrom />
      <RegForm />
      <Field />
      <DarkMode />
      <UseStateHook />
      <ObjectStyle />
      <Listrender />
      <ConditionalRendering />
      <Greeting />
      <h2 style={{ padding: "20px", color: "red", backgroundColor: "yellow" }}>
        hello world {name}
      </h2>
      <Hellow firstName={name} age={age} />
      <DestructuringProps name={name} age={age} city={city} />
      <DestructuringProps name={name2} age={age2} city={city2} />
      <DestructuringProps name={name3} age={age3} city={city3} />
    </div>
  );
}
