import React from "react";

const AddAnswer = ({ handleAddAnswer, className, question }) => {

  console.log('ADD ANSWER Q', question);
  return (
    <h5 className={className}>
      <button onClick={(e) => handleAddAnswer(e, question)}>Add Answer</button>
    </h5>
  );
};

export default AddAnswer;