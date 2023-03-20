import React from "react";
import NewReviewForm from "./NewReviewForm.js";

export default function NewReviewModal({ checked, toggleModal, name, hidden }) {
  return (
    <div
      className={"flex newReviewModal" + (hidden ? " hidden" : "")}
      onClick={toggleModal}
    >
      <section
        role="dialog"
        className={
          "modalBox bg-base-200 max-w-[800px] min-w-[500px] max-h-4/6 h-4/6" +
          (hidden ? "" : " active")
        }
      >
        <h3 className="font-bold text-2xl text-center">Write Your Review</h3>
        <h4 className="font-bold text-xl text-center">About the {name}</h4>
        <NewReviewForm />
      </section>
    </div>
  );
}
