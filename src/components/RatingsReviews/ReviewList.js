import React from "react";
import ReviewListItem from "./ReviewListItem.js";
import ReviewListHeader from "./ReviewListHeader.js";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModal,
  toggleShowMore,
} from "../../reducers/ratingsReviewsSlice.js";
import {
  scrollFromTopSet,
  reviewListScrollingSet,
} from "../../reducers/reviewListSlice.js";
import { useState, useEffect, useRef } from "react";
import ButtonPair from "../sharedComponents/ButtonPair";
import ScrollToTop from "./ScrollToTop";

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
  const { scrollFromTop } = useSelector((s) => s.reviewListReducer);
  const scrollRef = useRef(0);
  const dispatch = useDispatch();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (scrollFromTop === -1) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(reviewListScrollingSet({ scrolling: true }));
    } else if (scrollFromTop === 0) {
      dispatch(reviewListScrollingSet({ scrolling: false }));
    }
  }, [scrollFromTop]);

  return (
    <div
      ref={scrollRef}
      onScroll={(ev) =>
        dispatch(scrollFromTopSet({ scrollFromTop: ev.target.scrollTop }))
      }
      className="mt-10 max-h-[700px] reviewList overflow-y-auto relative"
    >
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
