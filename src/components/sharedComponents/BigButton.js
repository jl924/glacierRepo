import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function BigButton({ text, handleClick, plusIcon }) {
  const className =
    "btn-outline text-xl btn btn-secondary rounded-none h-16 mr-3 py-3";

  return (
    <button className={className} onClick={handleClick}>
      {text}
      {plusIcon ? <AiOutlinePlus className="m-1" /> : <></>}
    </button>
  );
}
