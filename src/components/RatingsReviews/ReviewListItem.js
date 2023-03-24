import React, { useState } from "react";
import ReviewHeader from "./ReviewHeader.js";
import HelpfulStatus from "../sharedComponents/HelpfulStatus";
import QaStatus from "../sharedComponents/QaStatus";
import { apiPutRequest } from "../../helpers/api.js";
import {
  incrementHelpfulness,
  removeResult,
} from "../../reducers/ratingsReviewsSlice.js";
import { useDispatch } from "react-redux";
import RecommendedWidget from "./RecommendedWidget";

const ReviewListItem = ({ review }) => {
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(false);
  const [capBody, setCap] = useState(true);

  const handleHelpfulClick = (ev) => {
    if (!loading) {
      setLoading(true);
      apiPutRequest(`/reviews/${review.review_id}/helpful`)
        .then(() => {
          dispatch(incrementHelpfulness({ review_id: review.review_id }));
        })
        .catch((err) => {
          console.log("error occured when trying to increase helpfulness", err);
        })
        .finally(() => setLoading(false));
    }
  };

  const handleReportClick = (ev) => {
    if (!loading) {
      setLoading(true);
      apiPutRequest(`/reviews/${review.review_id}/report`)
        .then(() => {
          dispatch(removeResult({ review_id: review.review_id }));
        })
        .catch((err) => {
          console.log("error occured when trying to report review", err);
        })
        .finally(() => setLoading(false));
    }
  };

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
      {/* response from seller */}
      <HelpfulStatus
        handleHelpfulClick={handleHelpfulClick}
        handleReportClick={handleReportClick}
        messageType={"review"}
        data={{ helpfulCount: review.helpfulness }}
        loading={loading}
      />
    </div>
  );
};

export default ReviewListItem;
