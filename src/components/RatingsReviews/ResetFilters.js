import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetRatingFilter,
  setTextFilter,
} from "../../reducers/ratingsReviewsSlice.js";

export default function ResetFilters() {
  const { filteredResultsNum, ratingsReviews } = useSelector(
    (state) => state.ratingsReviewsReducer
  );
  const dispatch = useDispatch();

  function resetFilters() {
    dispatch(setTextFilter({ textFilter: "" }));
    dispatch(resetRatingFilter());
  }

  return ratingsReviews.length !== filteredResultsNum ? (
    <h2 className="" module="resetFilter|Ratings">
      {filteredResultsNum + " results available. "}
      <a
        className="underline transition-all hover:cursor-pointer hover:bg-base-200 active:bg-base-300 active:tracking-widest"
        onClick={() => resetFilters()}
      >
        Reset Filters
      </a>
    </h2>
  ) : (
    <></>
  );
}
