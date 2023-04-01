import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Slider({ numBlocks = 3, title, percentage }) {
  const maxWidth = 220;
  const eachWidth = maxWidth / numBlocks;
  return (
    <div className="w-[240px] h-[8px] flex flex-row justify-between">
      {new Array(numBlocks).fill(10).map((_, i) => (
        <div
          key={i * eachWidth}
          style={{ width: eachWidth + "px" }}
          className="h-full bg-base-200"
        ></div>
      ))}
      <div
        className="absolute text-secondary"
        style={{ left: percentage * (maxWidth + 20) - 7 + "px" }}
      >
        <BsFillTriangleFill
          title={
            Math.floor(percentage * 100) + "% for characteristic: " + title
          }
        />
      </div>
    </div>
  );
}
