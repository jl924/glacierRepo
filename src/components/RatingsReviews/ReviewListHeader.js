import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortingSet } from "../../reducers/ratingsReviewsSlice";
import ScrollToTop from "./ScrollToTop";
import ReviewListSearchBar from "./ReviewListSearchBar";
import OpaqueHeader from "./OpaqueHeader";

const ReviewListHeader = ({}) => {
  const { meta, sorting, ratingsReviews } = useSelector(
    (state) => state.ratingsReviewsReducer
  );
  const { scrollFromTop, reviewListScrolling } = useSelector(
    (s) => s.reviewListReducer
  );
  const dispatch = useDispatch();

  const handleSortingChange = (ev) => {
    if (ev.target && ev.target.value) {
      dispatch(sortingSet({ sorting: ev.target.value }));
    }
  };
  const options = ["relevance", "helpfulness", "newest"];

  return (
    <div className="relative nonHeader">
      <div className="header">
        <h3 className="text-lg font-bold">
          {ratingsReviews.length} available reviews, sorted by{" "}
          <select
            className="underline transition-colors duration-300 bg-base-100 hover:cursor-pointer hover:bg-base-200"
            onChange={handleSortingChange}
            value={sorting}
          >
            {options.map((option) => (
              <option key={option} className="" value={option}>
                {option}
              </option>
            ))}
          </select>
        </h3>
      </div>
      <ReviewListSearchBar />
      {scrollFromTop > 200 && !reviewListScrolling && <ScrollToTop />}
      {scrollFromTop > 200 && !reviewListScrolling && <OpaqueHeader />}
    </div>
  );
};

export default ReviewListHeader;
