import React from "react";
import UserDateInfo from "./UserDateInfo.js";
import RatingView from "../sharedComponents/RatingView";

const ReviewHeader = ({ review }) => {
  return (
    <div className="flex justify-between">
      <div className="left relative" style={{ left: "-8px" }}>
        <RatingView width={94} rating={review.rating} />
      </div>
      {/* <RatingView style={{ float: "left" }} rating={3.5} width={108} /> */}
      <UserDateInfo review={review} />
    </div>
  );
};

export default ReviewHeader;
