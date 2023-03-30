import React from "react";

const Helpful = ({
  yesCount,
  handleHelpfulClick,
  className,
  messageType = "question",
  module,
}) => {
  return (
    <h5 module={"HelpfulButton|" + module} className={className}>
      Was this {messageType} helpful?{" "}
      <button onClick={handleHelpfulClick}>Yes</button> ({yesCount})
    </h5>
  );
};

export default Helpful;
