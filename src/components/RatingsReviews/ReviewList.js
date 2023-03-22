import React from "react";
import ReviewListItem from "./ReviewListItem.js";
import ReviewListHeader from "./ReviewListHeader.js";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModal,
  toggleShowMore,
} from "../../reducers/ratingsReviewsSlice.js";
import { useState } from "react";
import ButtonPair from "../sharedComponents/ButtonPair";

const getReviewListItems = (reviews) => {
  const ret = [];
  reviews.forEach((review) => {
    ret.push();
  });
  return ret;
};

const ReviewList = ({}) => {
  const { ratingsReviews, showMore, ratingFilter } = useSelector(
    (s) => s.ratingsReviewsReducer
  );
  const dispatch = useDispatch();

  return (
    <div className="mt-10 max-h-[700px] reviewList overflow-y-auto">
      {ratingsReviews
        .filter((review) => {
          if (ratingFilter.length !== 0) {
            return ratingFilter.includes(review.rating + "");
          } else return true;
        })
        .slice(0, showMore ? undefined : 2)
        .map((review, i) => {
          return [
            <ReviewListItem
              key={review.review_id + "x" + review.helpfulness}
              review={review}
            />,
            <div
              key={review.review_id + "y" + review.helpfulness}
              className="divider before:bg-primary after:bg-secondary"
            />,
          ];
        })
        .flat()}
    </div>
  );
};

export default ReviewList;
