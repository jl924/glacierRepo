import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function RecommendedWidget() {
  return (
    <div className="flex flex-row">
      <IconContext.Provider
        value={{ size: "1.5em", style: { fontWeight: "900" } }}
      >
        <AiOutlineCheck />
      </IconContext.Provider>
      <p className="ml-2">I recommend this product</p>
    </div>
  );
}
