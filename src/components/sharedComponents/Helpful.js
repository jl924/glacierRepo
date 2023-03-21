import React from "react";

const Helpful = ({
  yesCount,
  handleHelpfulClick,
  className,
  messageType = "question",
}) => {
  return (
    <h5 className={className}>
      Was this {messageType} helpful?{" "}
      <button onClick={handleHelpfulClick}>Yes</button> ({yesCount})
    </h5>
  );
};

export default Helpful;
