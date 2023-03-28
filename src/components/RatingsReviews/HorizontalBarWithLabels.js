import React, { useState } from "react";

export const HorizontalBarWithLabels = ({
  labels,
  percentage,
  handleRatingClick,
  selected,
}) => {
  const width = Math.floor(140 * percentage);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={
        "flex flex-row items-center mb-4 justify-around w-5/6 cursor-pointer transition-colors duration-200" +
        (selected ? " bg-base-200" : "") + (isHovering ? ' bg-gray-100' : '')
      }
      onClick={() => handleRatingClick()}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <h5 className="underline text-sm basis-14">{labels[0]}</h5>
      <div className="basis-40 h-2">
        <div className="absolute bar bg-base-200 w-[140px] h-[8px]" />
        <div
          className={"filledBar absolute bar bg-secondary h-[8px]" + (selected ? ' selected' : '') + (isHovering ? ' animating' : '')}
          style={{ width}}//, backgroundColor: isHovering ? "red" : "" }}
        />
      </div>
      <h5 className="underline text-sm basis-8">{labels[1]}</h5>
    </div>
  );
};
