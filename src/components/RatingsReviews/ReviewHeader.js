import React from "react";
import UserDateInfo from "./UserDateInfo.js";
import RatingView from "../sharedComponents/RatingView";

const ReviewHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="left relative" style={{ left: "-8px" }}>
        <RatingView width={94} rating={3.5} />
      </div>
      {/* <RatingView style={{ float: "left" }} rating={3.5} width={108} /> */}
      <UserDateInfo />
    </div>
  );
};

export default ReviewHeader;
