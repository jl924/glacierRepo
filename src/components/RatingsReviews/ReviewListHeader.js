import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortingSet } from "../../reducers/ratingsReviewsSlice";
import ScrollToTop from "./ScrollToTop";

const ReviewListHeader = ({}) => {
  const { meta, sorting } = useSelector((state) => state.ratingsReviewsReducer);
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
    <div className="nonHeader">
      <div className="header">
        <h3 className="text-lg font-bold">
          {meta.numReviews} Reviews, sorted by{" "}
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
      {scrollFromTop > 200 && !reviewListScrolling && <ScrollToTop />}
    </div>
  );
};

export default ReviewListHeader;
