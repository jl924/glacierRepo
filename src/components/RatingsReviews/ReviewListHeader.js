import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortingSet } from "../../reducers/ratingsReviewsSlice";

const ReviewListHeader = ({}) => {
  const { meta, sorting } = useSelector((state) => state.ratingsReviewsReducer);
  const dispatch = useDispatch();

  const handleSortingChange = (ev) => {
    if (ev.target && ev.target.value) {
      dispatch(sortingSet({ sorting: ev.target.value }));
    }
  };

  return (
    <div className="header">
      <h3 className="font-bold text-lg">
        {meta.numReviews} Reviews, sorted by{" "}
        <select
          className="underline bg-base-100"
          onChange={handleSortingChange}
          value={sorting}
        >
          <option value="relevant">relevance</option>
          <option value="helpful">helpfulness</option>
          <option value="newest">newest</option>
        </select>
      </h3>
    </div>
  );
};

export default ReviewListHeader;
