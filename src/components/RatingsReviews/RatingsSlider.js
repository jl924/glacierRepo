import React from "react";
import Slider from "./Slider";

const allLabels = {
  size: ["Too small", "Perfect", "Too large"],
  width: ["Too narrow", "Perfect", "Too wide"],
  comfort: ["Uncomfortable", "Perfect"],
  quality: ["Poor", "Great"],
  length: ["Runs short", "Runs long"],
  fit: ["Runs tight", "Runs baggy"],
};

export const RatingsSlider = ({ title = "Comfort", percentage }) => {
  const labels = allLabels[title.toLowerCase()];
  return (
    <div className="relative sliderDisplay">
      <span>{title}</span>
      <Slider numBlocks={labels.length === 3 ? 3 : 4} percentage={percentage} />
      <div className="w-[240px] flex justify-between">
        {labels.map((label) => (
          <span key={label} className="text-sm">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
