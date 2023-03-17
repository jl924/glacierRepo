import React from "react";
import UserDateInfo from "./UserDateInfo.js";

const ReviewHeader = () => {
  return (
    <div className="flex justify-between">
      <div>Star rating</div>
      <UserDateInfo />
    </div>
  );
};

export default ReviewHeader;
