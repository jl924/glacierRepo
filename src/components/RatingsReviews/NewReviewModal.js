import React from "react";
import NewReviewForm from "./NewReviewForm.js";
import ButtonPair from "../sharedComponents/ButtonPair";

export default function NewReviewModal({ checked, toggleModal, name, hidden }) {
  function handleMoreClick(ev) {
    ev.preventDefault();
    console.log(ev.target.textContent);
  }

  function handleAddClick(ev) {
    ev.preventDefault();
    toggleModal(ev);
  }

  return (
    <div>
      <ButtonPair
        buttons={{
          ["More Reviews"]: handleMoreClick,
          ["Add a Review"]: handleAddClick,
        }}
      />
      <div
        className={
          "flex justify-center items-center newReviewModal" +
          (hidden ? " hidden" : "")
        }
        onClick={toggleModal}
        key={100000000}
      >
        <section
          role="dialog"
          className={
            "modalBox bg-base-200 max-w-[800px] min-w-[500px] max-h-2/3" +
            (hidden ? "" : " active")
          }
        >
          <h3 className="font-bold text-2xl text-center">Write Your Review</h3>
          <h4 className="font-bold text-xl text-center">About the {name}</h4>
          <NewReviewForm />
        </section>
      </div>
    </div>
  );
}
