import React, { useState } from "react";
import RatingsDistributionGraph from "./RatingsReviews/RatingsDistributionGraph.js";
import ReviewList from "./RatingsReviews/ReviewList.js";
import "../styles/RatingsReviews.sass";
import exampleReviews from "../exampleData/reviews.json";
import ButtonPair from "./sharedComponents/ButtonPair";

const RatingsReviews = () => {
  const [reviews, setReviews] = useState(exampleReviews.results);

  function handleAddClick(ev) {
    ev.preventDefault();
    console.log(ev.target.textContent);
  }

  function handleMoreClick(ev) {
    ev.preventDefault();
    console.log(ev.target.textContent);
  }

  return (
    <div className="mainRatings columns-2 gap-20 lg:container grid mx-auto">
      <div className="leftReviews left flex flex-col">
        <h4>Ratings & Reviews</h4>
        <div className='averageAndStars flex'>
          <h1>3.5</h1>
          <div className="starComponent">*****</div>
        </div>
        <RatingsDistributionGraph reviews={reviews} />
        <div>
          <span>Comfort</span>
          <div>Slider Component</div>
          <div>
            <span>Poor</span>
            <span>Perfect</span>
          </div>
        </div>
      </div>
      <div className="right flex flex-col">
        <ReviewList reviews={reviews} />
        <ButtonPair
          buttons={{
            ["More Reviews"]: handleMoreClick,
            ["Add a Review"]: handleAddClick,
          }}
        />
      </div>
    </div>
  );
};

export default RatingsReviews;
