import React from "react";
import Slider from "./Slider";
import { useSelector } from "react-redux";

export const RatingsSlider = ({ title = "Comfort", percentage }) => {
  const labels = useSelector(
    (state) => state.ratingsReviewsReducer.characteristicLabels
  )[title];
  return (
    <div
      module="characteristicsDisplay|Ratings"
      className="relative sliderDisplay"
    >
      <span>{title}</span>
      <Slider
        numBlocks={labels.length === 3 ? 3 : 4}
        title={title}
        percentage={percentage}
      />
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
