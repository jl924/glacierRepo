import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RatingsDistributionGraph from "./RatingsReviews/RatingsDistributionGraph.js";
import ReviewList from "./RatingsReviews/ReviewList.js";
import "../styles/RatingsReviews.sass";
import exampleReviews from "../exampleData/reviews.json";
import ButtonPair from "./sharedComponents/ButtonPair";
import exampleProduct from "../exampleData/oneProduct.json";
import NewReviewModal from "./RatingsReviews/NewReviewModal";
import RatingView from "./sharedComponents/RatingView";
import RatingsReviewsLoader from "./RatingsReviews/RatingsReviewsLoader.js";

const RatingsReviews = () => {
  const reviews = useSelector(
    (state) => state.ratingsReviewsReducer.ratingsReviews
  );
  const product = useSelector(
    (state) => state.selectedProductReducer.selectedProduct
  );
  const meta = useSelector((state) => state.ratingsReviewsReducer.meta);
  const [visible, setVisible] = useState(false);

  const whiteList = ["newReviewModal", "btn-secondary"];
  function toggleModal(ev) {
    let onWhitelist = false;
    whiteList.forEach((allowClass) => {
      if (Array.from(ev.target.classList).includes(allowClass)) {
        onWhitelist = true;
      }
    });
    if (onWhitelist) {
      setVisible(!visible);
      let currentClasses = Array.from(document.querySelector(".app").classList);
      if (currentClasses.includes("modalOpen")) {
        currentClasses.splice(currentClasses.indexOf("modalOpen"), 1);
      } else {
        currentClasses.push("modalOpen");
      }
      document.querySelector(".app").className = currentClasses.join(" ");
    }
  }

  return (
    <div className="mainRatings columns-2 grid mx-auto">
      <div className="leftReviews left flex flex-col align-top">
        <h4>Ratings & Reviews</h4>
        <div className="averageAndStars flex items-start h-[80px]">
          <h1 className="leading-[60px]">{meta.averageReviews}</h1>
          <RatingView width={94} rating={meta.averageReviews} />
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
      <div className="rightReviews right flex flex-col ml-20">
        <ReviewList />
        <NewReviewModal
          checked={visible}
          toggleModal={toggleModal}
          name={product.name}
          hidden={!visible}
        />
      </div>
    </div>
  );
};

export default RatingsReviews;
