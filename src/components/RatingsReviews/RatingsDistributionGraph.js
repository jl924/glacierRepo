import React from "react";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { HorizontalBarWithLabels } from "./HorizontalBarWithLabels";

const RatingsDistributionGraph = ({}) => {
  const meta = useSelector((state) => state.ratingsReviewsReducer.meta);
  const { recommend, ratings } = meta;

  /* if (ratings) {
    const chart = new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: Object.keys(ratings),
        datasets: [
          {
            data: Object.values(ratings),
          },
        ],
      },
      options: {
        indexAxis: "y",
        onClick: (e) => {
          const canvasPosition = getRelativePosition(e, chart);
          const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
          const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        },
      },
    });
    console.log(chart.data);
  } */

  return (
    <div className="graph">
      <h2 className="text-sm">
        {recommend || "Loading"}% of reviews recommend this product
      </h2>
      {ratings &&
        Object.keys(ratings)
          .reverse()
          .map((k) => {
            console.log(meta);
            return (
              <HorizontalBarWithLabels
                labels={[
                  k + " star" + (k !== "1" ? "s" : ""),
                  `(${ratings[k]})`,
                ]}
                percentage={ratings[k] / meta.max}
              />
            );
          })}
    </div>
  );
};

export default RatingsDistributionGraph;
