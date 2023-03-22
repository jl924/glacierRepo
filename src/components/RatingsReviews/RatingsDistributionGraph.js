import React from "react";
import { useSelector } from "react-redux";

const RatingsDistributionGraph = ({}) => {
  const recommend = useSelector(
    (state) => state.ratingsReviewsReducer.meta.recommend
  );

  return <div>{recommend || "Loading"}% of reviews recommend this product</div>;
};

export default RatingsDistributionGraph;
