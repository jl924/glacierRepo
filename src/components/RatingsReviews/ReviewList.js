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
import { apiPutRequest } from "../../helpers/api.js";
import {
  incrementHelpfulness,
  removeResult,
} from "../../reducers/ratingsReviewsSlice.js";

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
  let [loading, setLoading] = useState(false);
  let [loadingHelpful, setLoadingHelpful] = useState({});

  const handleHelpfulClick = (review_id, ev) => {
    if (!loadingHelpful[review_id]) {
      setLoadingHelpful((loadingHelpful) => {
        return {
          ...loadingHelpful,
          [review_id]: true,
        };
      });
      apiPutRequest(`/reviews/${review_id}/helpful`)
        .then(() => {
          dispatch(incrementHelpfulness({ review_id: review_id }));
        })
        .catch((err) => {
          console.log("error occured when trying to increase helpfulness", err);
        });
    }
  };

  const handleReportClick = (review_id, ev) => {
    if (!loading) {
      setLoading(true);
      apiPutRequest(`/reviews/${review.review_id}/report`)
        .then(() => {
          dispatch(removeResult({ review_id: review.review_id }));
        })
        .catch((err) => {
          console.log("error occured when trying to report review", err);
        })
        .finally(() => setLoading(false));
    }
  };

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
      onScroll={(ev) =>{
        if(ev.target.scrollTop === 0) {
          if(scrollFromTop !== 0) dispatch(scrollFromTopSet({ scrollFromTop: 0 }))
        } else if (ev.target.scrollTop >= 250) {
          if(scrollFromTop !== 250) dispatch(scrollFromTopSet({ scrollFromTop: 250 }))
        } else if (ev.target.scrollTop > 0) {
          if(scrollFromTop !== 1) dispatch(scrollFromTopSet({ scrollFromTop: 1 }))
        }
      }
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
              handleHelpfulClick={handleHelpfulClick}
              handleReportClick={handleReportClick}
              loading={loading}
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
