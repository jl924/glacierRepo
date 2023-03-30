import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function BigButton({
  text,
  handleClick,
  plusIcon,
  classes,
  type = "button",
  disabled = false,
  module,
}) {
  const className =
    "flex flex-row items-center h-16 p-3 mr-3 text-xl uppercase transition-colors border rounded-none border-secondary bg-base-100 hover:bg-base-300 active:bg-secondary";

  return (
    <button
      disabled={disabled}
      type={type}
      className={className + " " + classes}
      onClick={handleClick}
      module={
        text
          .split("")
          .filter((v) => v !== " ")
          .join("") +
        "|" +
        module
      }
    >
      {text}
      {plusIcon ? <AiOutlinePlus className="m-1" /> : <></>}
    </button>
  );
}
