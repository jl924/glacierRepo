import React from "react";

export default function BigButton({ text, handleClick }) {
  const className = "btn-outline btn btn-accent";

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
