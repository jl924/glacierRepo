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

const ReviewListItem = ({ review }) => {
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(false);

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
      <h3 className="bold">{review.summary}</h3>
      <p>{review.body}</p>
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
