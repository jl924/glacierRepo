import React from "react";
import NewReviewForm from "./NewReviewForm.js";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../reducers/ratingsReviewsSlice.js";

export default function NewReviewModal({ checked, name, hidden }) {
  const dispatch = useDispatch();
  const { showModal, showMore } = useSelector(
    (state) => state.ratingsReviewsReducer
  );

  return (
    <div
      className={
        "flex justify-center items-center newReviewModal" +
        (!showModal ? " hidden" : "")
      }
      onClick={(ev) => {
        if (Array.from(ev.target.classList).includes("newReviewModal")) {
          dispatch(toggleModal());
        }
      }}
      key={100000000}
    >
      <section
        role="dialog"
        className={
          "modalBox bg-base-200 max-w-[800px] min-w-[600px] min-h-2/3" +
          (!showModal ? "" : " active")
        }
      >
        <h3 className="text-2xl font-bold text-center">Write Your Review</h3>
        <h4 className="text-xl font-bold text-center">About the {name}</h4>
        <NewReviewForm />
      </section>
    </div>
  );
}
