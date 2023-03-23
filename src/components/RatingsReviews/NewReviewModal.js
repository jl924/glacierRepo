import React from "react";
import NewReviewForm from "./NewReviewForm.js";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModal,
  toggleShowMore,
} from "../../reducers/ratingsReviewsSlice.js";
import ButtonPair from "../sharedComponents/ButtonPair";

export default function NewReviewModal({ checked, name, hidden }) {
  const dispatch = useDispatch();
  const { showModal, showMore } = useSelector(
    (state) => state.ratingsReviewsReducer
  );

  function handleMoreClick(ev) {
    ev.preventDefault();
    dispatch(toggleShowMore());
  }

  function handleAddClick(ev) {
    ev.preventDefault();
    dispatch(toggleModal());
  }

  return [
    <ButtonPair
      key={"unique"}
      buttons={{
        [showMore ? "Less Reviews" : "More Reviews"]: handleMoreClick,
        ["Add a Review"]: handleAddClick,
      }}
    />,
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
          "modalBox bg-base-200 max-w-[1000px] min-w-[800px] min-h-2/3" +
          (!showModal ? "" : " active")
        }
      >
        <h3 className="font-bold text-2xl text-center">Write Your Review</h3>
        <h4 className="font-bold text-xl text-center">About the {name}</h4>
        <NewReviewForm />
      </section>
    </div>,
  ];
}
