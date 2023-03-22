import React from "react";
import ReviewListItem from "./ReviewListItem.js";
import ReviewListHeader from "./ReviewListHeader.js";
import { useSelector } from "react-redux";

const getReviewListItems = (reviews) => {
  const ret = [];
  reviews.forEach((review) => {
    ret.push();
  });
  return ret;
};

const ReviewList = ({}) => {
  const { ratingsReviews } = useSelector(
    (state) => state.ratingsReviewsReducer
  );
  return (
    <div className="">
      <ReviewListHeader />
      {ratingsReviews
        .slice(0, 2)
        .map((review) => [
          <ReviewListItem
            key={review.review_id + review.helpfulness}
            review={review}
          />,
          <div
            key={review.review_id + "n"}
            className="divider before:bg-primary after:bg-secondary"
          />,
        ])
        .flat()}
    </div>
  );
};

export default ReviewList;
