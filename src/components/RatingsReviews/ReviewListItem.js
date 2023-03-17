import React from "react";
import ReviewHeader from "./ReviewHeader.js";
import HelpfulStatus from "../sharedComponents/HelpfulStatus";
import QaStatus from "../sharedComponents/QaStatus";

const ReviewListItem = ({ review }) => {
  const handleHelpfulClick = (ev) => {
    console.log("i was helpful!");
  };

  const handleReportClick = (ev) => {
    console.log("i was repoted :(!");
  };

  return (
    <div className="review">
      <ReviewHeader />
      <h3 className="bold">{review.summary}</h3>
      <p>{review.body}</p>
      <HelpfulStatus
        handleHelpfulClick={handleHelpfulClick}
        handleReportClick={handleReportClick}
      />
    </div>
  );
};

export default ReviewListItem;
