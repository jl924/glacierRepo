import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function BigButton({
  text,
  handleClick,
  plusIcon,
  classes,
  type = "button",
  disabled = false,
}) {
  const className =
    "btn-outline text-xl btn btn-secondary rounded-none h-16 mr-3 py-3";

  return (
    <button
      disabled={disabled}
      type={type}
      className={className + " " + classes}
      onClick={handleClick}
    >
      {text}
      {plusIcon ? <AiOutlinePlus className="m-1" /> : <></>}
    </button>
  );
}
