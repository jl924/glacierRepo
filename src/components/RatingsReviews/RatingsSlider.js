import React from "react";
import Slider from "./Slider";

const labels = {
  size: ["Too small", "Perfect", "Too large"],
  width: ["Too narrow", "Perfect", "Too wide"],
  comfort: ["Uncomfortable", "Perfect"],
  quality: ["Poor", "Great"],
  length: ["Runs short", "Runs long"],
  fit: ["Runs tight", "Runs baggy"],
};

export const RatingsSlider = ({ title = "Comfort", percentage }) => {
  return (
    <div>
      <span>{title}</span>
      <Slider
        numBlocks={labels[title.toLowerCase()].length === 3 ? 3 : 4}
        percentage={percentage}
      />
      <div>
        <span>Poor</span>
        <span>Perfect</span>
      </div>
    </div>
  );
};
