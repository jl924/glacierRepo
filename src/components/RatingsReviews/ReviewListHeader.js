import React from "react";
import { useSelector } from "react-redux";

const ReviewListHeader = ({}) => {
  const { meta } = useSelector((state) => state.ratingsReviewsReducer);
  return (
    <div className="header">
      <h3>
        {meta.numReviews} Reviews, sorted by{" "}
        <select className="underline bg-base-100">
          <option value="relevance">relevance</option>
        </select>
      </h3>
    </div>
  );
};

export default ReviewListHeader;
