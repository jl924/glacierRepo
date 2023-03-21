import React from "react";
import BigButton from "./BigButton";

export default function ButtonPair({ buttons }) {
  const buttonKeys = Object.keys(buttons);
  const plusButtonWhitelist = ["Add a Review", "Add A Question"];
  const buttonElements = [];
  for (var name in buttons) {
    buttonElements.push(
      <BigButton
        key={name}
        text={name}
        handleClick={buttons[name]}
        plusIcon={plusButtonWhitelist.includes(name)}
      />
    );
  }

  return <div className="buttonPair mt-10">{buttonElements}</div>;
}
