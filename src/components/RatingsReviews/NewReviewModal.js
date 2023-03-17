import React from "react";
import NewReviewForm from "./NewReviewForm.js";

export default function NewReviewModal({ checked, toggleModal, name }) {
  return (
    <div className="newReviewModal">
      <input
        type="checkbox"
        id="formModal"
        checked={checked}
        readOnly={true}
        className="modal-toggle"
      />
      <label onClick={toggleModal} className="modal cursor-pointer">
        {
          <div className="modal-box max-w-[800px] min-w-[500px] max-h-4/6 h-4/6">
            <h3 className="font-bold text-2xl text-center">
              Write Your Review
            </h3>
            <h4 className="font-bold text-xl text-center">About the {name}</h4>
            <NewReviewForm />
          </div>
        }
      </label>
    </div>
  );
}
