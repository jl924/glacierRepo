import React from "react";
import ReviewListItem from "./ReviewListItem.js";
import ReviewListHeader from "./ReviewListHeader.js";
import { useSelector } from "react-redux";

const getReviewListItems = (reviews) => {
  const ret = [];
  reviews.forEach((review) => {
    ret.push(
      <ReviewListItem key={review.summary} review={review} />,
      <div
        key={review.summary + "n"}
        className="divider before:bg-primary after:bg-secondary"
      />
    );
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
      {getReviewListItems(ratingsReviews.slice(0, 2))}
    </div>
  );
};

export default ReviewList;
