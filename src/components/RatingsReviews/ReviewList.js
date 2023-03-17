import React from "react";
import ReviewListItem from "./ReviewListItem.js";
import ReviewListHeader from "./ReviewListHeader.js";

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

const ReviewList = ({ reviews }) => {
  return (
    <div className="">
      <ReviewListHeader reviews={reviews} />
      {getReviewListItems(reviews)}
    </div>
  );
};

export default ReviewList;
