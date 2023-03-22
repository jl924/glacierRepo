import React from "react";
import { useSelector } from "react-redux";
import { HorizontalBarWithLabels } from "./HorizontalBarWithLabels";

const RatingsDistributionGraph = ({}) => {
  const meta = useSelector((state) => state.ratingsReviewsReducer.meta);
  const { recommend, ratings } = meta;

  return (
    <div className="graph">
      <h2 className="text-sm">
        {recommend || "Loading"}% of reviews recommend this product
      </h2>
      {ratings &&
        Object.keys(ratings)
          .reverse()
          .map((k) => {
            return (
              <HorizontalBarWithLabels
                labels={[
                  k + " star" + (k !== "1" ? "s" : ""),
                  `(${ratings[k]})`,
                ]}
                key={k}
                percentage={ratings[k] / meta.max}
              />
            );
          })}
    </div>
  );
};

export default RatingsDistributionGraph;
