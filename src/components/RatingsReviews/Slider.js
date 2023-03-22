import React from "react";

export default function Slider({ numBlocks = 3, percentage }) {
  const maxWidth = 240;
  const eachWidth = maxWidth / numBlocks;
  const eachMargin = (eachWidth * 0.1) / 2;
  return (
    <div className="w-full h-[8px] flex flex-row">
      {new Array(numBlocks).fill(10).map(() => (
        <div
          style={{ width: eachWidth, margin: "0 " + eachMargin + "px" }}
          className="bg-secondary h-full"
        ></div>
      ))}
      <div></div>
    </div>
  );
}
