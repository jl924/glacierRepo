import React from "react";

const Helpful = ({ yesCount, handleHelpfulClick, className }) => {
  return (
    <h5 className={className}>
      Helpful? <button onClick={handleHelpfulClick}>Yes</button> ({yesCount})
    </h5>
  );
};

export default Helpful;
