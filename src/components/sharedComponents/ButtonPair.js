import React from "react";
import BigButton from "./BigButton";

export default function ButtonPair({
  buttons,
  showFirst = true,
  className = "mt-10",
}) {
  const buttonKeys = Object.keys(buttons);
  const plusButtonWhitelist = ["Add a Review", "Add A Question"];
  const buttonElements = [];
  for (let i = 0; i < Object.keys(buttons).length; i++) {
    var name = Object.keys(buttons)[i];
    if (i > 0 || (showFirst && i === 0)) {
      buttonElements.push(
        <BigButton
          key={name}
          text={name}
          handleClick={buttons[name]}
          plusIcon={plusButtonWhitelist.includes(name)}
        />
      );
    }
  }

  return <div className={className + " buttonPair"}>{buttonElements}</div>;
}
