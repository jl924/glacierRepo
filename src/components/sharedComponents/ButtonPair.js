import React from "react";
import BigButton from "./BigButton";

export default function ButtonPair({ buttons }) {
  const buttonKeys = Object.keys(buttons);
  const buttonElements = [];
  for (var name in buttons) {
    buttonElements.push(
      <BigButton key={name} text={name} handleClick={buttons[name]} />
    );
  }

  return <div className="buttonPair">{buttonElements}</div>;
}
