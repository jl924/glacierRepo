import React from "react";

const AddAnswer = ({ handleAddAnswer, className, question }) => {

  return (
    <h5 className={className}>
      <button module='addAnswer|QA' onClick={(e) => handleAddAnswer(e, question)}>Add Answer</button>
    </h5>
  );
};

export default AddAnswer;