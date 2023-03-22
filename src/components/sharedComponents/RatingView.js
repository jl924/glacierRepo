import React, { useState } from "react";

const RatingView = ({
  rating,
  style = {},
  numStars = 5,
  width = 200,
  size = "lg",
}) => {
  rating =
    Math.floor(rating) +
    Math.floor((rating - Math.floor(rating)) / 0.25) * 0.25;
  const starLen = (width - 8) / numStars;
  const defaultOffset = width - 8 - starLen * rating; // 192.5 - 38.4 * rating;
  const offset = defaultOffset * ((width - 8) / (numStars * starLen));
  const ratings = new Array(numStars + 1).fill(0).map((val, i) => i);

  const sharedDims = {
    width: width + "px",
    height: starLen + "px",
  };
  const sharedStyle = Object.assign({}, style, sharedDims, {
    display: "block",
    position: "absolute",
    float: "left",
  });
  const foregroundStyle = Object.assign(
    { clipPath: new String("inset(0 " + offset + "px 0 0)") },
    sharedStyle
  );
  const starStyle = (rating, clickable = true) => {
    return {
      width: rating === 0 ? "8px" : starLen + "px",
      height: starLen + "px",
      float: "left",
      cursor: clickable ? "pointer" : "default",
    };
  };
  const innerStarStyle = (rating, clickable = true) => {
    const width = starStyle(rating).width;
    const w = width.slice(0, width.length - 2);
    const newWidth = w * 0.7;
    const diff = w - newWidth;
    return {
      width: rating === 0 ? "8px" : newWidth + "px",
      margin: `0 ${diff / 2}px`,
      height: starLen + "px",
      float: "left",
      cursor: clickable ? "pointer" : "default",
    };
  };

  return (
    <div className="ratingView relative" style={sharedDims}>
      <div
        className={"rating ratingBackground rating-" + size}
        style={sharedStyle}
      >
        {ratings.map((rating) => (
          <input
            key={rating}
            type="radio"
            className={rating === 0 ? "rating-hidden" : "mask mask-star 2"}
            style={starStyle(rating, false)}
            readOnly={true}
            checked={0 === rating}
            disabled={true}
          />
        ))}
      </div>
      <div
        className={"rating ratingForeground rating-" + size}
        style={foregroundStyle}
      >
        {ratings
          .map((rating) => [
            <input
              key={rating}
              type="radio"
              className={rating === 0 ? "rating-hidden" : "mask mask-star 2"}
              readOnly={true}
              style={starStyle(rating)}
              checked={rating === numStars}
            />,
            ,
          ])
          .flat()}
      </div>
      <div
        className={"rating ratingBackgroundCutout rating-" + size}
        style={foregroundStyle}
      ></div>
    </div>
  );
};

export default RatingView;
