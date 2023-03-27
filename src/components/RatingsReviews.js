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
import { RatingsSlider } from "./RatingsReviews/RatingsSlider";
import ReviewListHeader from "./RatingsReviews/ReviewListHeader";

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
    <div className="grid mx-auto mainRatings">
      <div className="flex flex-col align-top leftReviews left">
        <h4>Ratings & Reviews</h4>
        <div className="averageAndStars flex items-start h-[80px]">
          <h1 className="leading-[54px]">{meta.averageReviews}</h1>
          <RatingView
            animateOnHover={true}
            width={108}
            rating={meta.averageReviews}
            numStars={5}
          />
        </div>
        <RatingsDistributionGraph reviews={reviews} />
        {meta.characteristics &&
          Object.keys(meta.characteristics).map((characteristic) => (
            <RatingsSlider
              key={characteristic}
              percentage={(meta.characteristics[characteristic].value - 1) / 4}
              title={characteristic}
            />
          ))}
      </div>
      <div className="flex flex-col rightReviews right">
        <ReviewListHeader />
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
