import React from "react";
import Prop from "./Prop";

// Div - component, div - html element
const Inline = () => {
  const name = "Nitin";
  const age = 23;
  return (
    <div>
      <Prop name={name} age={age} />
    </div>
  );
};

export default Inline;
