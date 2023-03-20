import React, { useState, useEffect } from "react";
import RatingsDistributionGraph from "./RatingsReviews/RatingsDistributionGraph.js";
import ReviewList from "./RatingsReviews/ReviewList.js";
import "../styles/RatingsReviews.sass";
import exampleReviews from "../exampleData/reviews.json";
import ButtonPair from "./sharedComponents/ButtonPair";
import exampleProduct from "../exampleData/oneProduct.json";
import NewReviewModal from "./RatingsReviews/NewReviewModal";

const RatingsReviews = () => {
  useEffect(() => {}, []);

  const [reviews, setReviews] = useState(exampleReviews.results);
  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, 2));
  const [product, setProduct] = useState(exampleProduct);
  const [visible, setVisible] = useState(false);

  function handleAddClick(ev) {
    ev.preventDefault();
    toggleModal(ev);
  }

  const whiteList = ["newReviewModal", "btn-secondary"];
  function toggleModal(ev) {
    let onWhitelist = false;
    whiteList.forEach((allowClass) => {
      if (Array.from(ev.target.classList).includes(allowClass)) {
        console.log("found", allowClass);
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
      console.log(currentClasses);
      document.querySelector(".app").className = currentClasses.join(" ");
    }
  }

  function handleMoreClick(ev) {
    ev.preventDefault();
    console.log(ev.target.textContent);
  }

  return (
    <div className="mainRatings columns-2 grid mx-auto">
      <div className="leftReviews left flex flex-col">
        <h4>Ratings & Reviews</h4>
        <div className="averageAndStars flex">
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
      <div className="right flex flex-col ml-20">
        <ReviewList reviews={displayedReviews} />
        <ButtonPair
          buttons={{
            ["More Reviews"]: handleMoreClick,
            ["Add a Review"]: handleAddClick,
          }}
        />
      </div>
      <NewReviewModal
        checked={visible}
        toggleModal={toggleModal}
        name={product.name}
        hidden={!visible}
      />
    </div>
  );
};

export default RatingsReviews;
