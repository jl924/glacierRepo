import React from "react";
import Status from "../sharedComponents/Status";
import Helpful from "../sharedComponents/Helpful";
import AddAnswer from './AddAnswer.js'

const HelpfulQA = ({ data, handleHelpfulClick, handleAddAnswer}) => {
  const sharedClasses = 'flex-initial';
  return (
    <Status
      className="qaStatus"
      sharedClasses={sharedClasses}
      children={[
        <Helpful
          key={3}
          yesCount={data.helpfulCount}
          handleHelpfulClick={handleHelpfulClick}
          className={sharedClasses + " status"}
        />,
        <AddAnswer
          key={4}
          handleHelpfulClick={handleAddAnswer}
          className={sharedClasses + " status"}
        />,
      ]}
    />
  );
};

export default HelpfulQA;