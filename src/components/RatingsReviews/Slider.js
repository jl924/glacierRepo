import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Slider({ numBlocks = 3, percentage }) {
  const maxWidth = 220;
  const eachWidth = maxWidth / numBlocks;
  return (
    <div className="w-[240px] h-[8px] flex flex-row justify-between">
      {new Array(numBlocks).fill(10).map((_, i) => (
        <div
          key={i * eachWidth}
          style={{ width: eachWidth + "px" }}
          className="bg-base-200 h-full"
        ></div>
      ))}
      <div
        className="absolute"
        style={{ left: percentage * (maxWidth + 20) - 7 + "px" }}
      >
        <BsFillTriangleFill />
      </div>
    </div>
  );
}
