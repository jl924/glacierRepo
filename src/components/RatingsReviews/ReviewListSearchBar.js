import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTextFilter } from "../../reducers/ratingsReviewsSlice";
import MinimumReached from "./MinimumReached";

export default function ReviewListSearchBar() {
  let textFilter = useSelector(
    (state) => state.ratingsReviewsReducer.textFilter
  );
  let dispatch = useDispatch();

  return (
    <div className="w-full">
      <input
        className="w-full rounded-none input input-primary"
        type="text"
        value={textFilter}
        onChange={(ev) =>
          dispatch(setTextFilter({ textFilter: ev.target.value }))
        }
      />
      <MinimumReached bg={"base-100"} text={textFilter} minimum={4} />
    </div>
  );
}
