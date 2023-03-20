import React from "react";

const AddAnswer = ({ handleAddAnswer, className }) => {
  return (
    <h5 className={className}>
      <button onClick={handleAddAnswer}>Add Answer</button>
    </h5>
  );
};

export default AddAnswer;