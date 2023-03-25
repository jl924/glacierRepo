import React, { useState } from "react";
import ReviewHeader from "./ReviewHeader.js";
import HelpfulStatus from "../sharedComponents/HelpfulStatus";
import QaStatus from "../sharedComponents/QaStatus";
import { useDispatch } from "react-redux";
import RecommendedWidget from "./RecommendedWidget";
import ResponseFromSeller from "./ResponseFromSeller";

const ReviewListItem = ({
  review,
  handleHelpfulClick,
  handleReportClick,
  loading,
}) => {
  const dispatch = useDispatch();
  const [capBody, setCap] = useState(true);

  return (
    <div className="review">
      <ReviewHeader review={review} />
      <h3 className="bold">{review.summary.slice(0, 60)}</h3>
      <p>{review.summary.slice(60)}</p>
      <p>{review.body.slice(0, capBody ? 250 : undefined)}</p>
      {review.body && review.body.length > 250 && (
        <div className="w-full showMore">
          <a
            className="underline cursor-pointer"
            onClick={() => setCap(!capBody)}
          >
            {capBody ? "Show More" : "Show Less"}
          </a>
        </div>
      )}
      {review && review.recommend && <RecommendedWidget />}
      {review && review.response && (
        <ResponseFromSeller response={review.response} />
      )}
      <HelpfulStatus
        handleHelpfulClick={handleHelpfulClick.bind(null, review.review_id)}
        handleReportClick={handleReportClick.bind(null, review.review_id)}
        messageType={"review"}
        data={{ helpfulCount: review.helpfulness }}
        loading={loading}
      />
    </div>
  );
};

export default ReviewListItem;
