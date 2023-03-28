import React from "react";
import Status from "../sharedComponents/Status";
import Helpful from "../sharedComponents/Helpful";
import AddAnswer from './AddAnswer.js';
import Report from '../sharedComponents/Report';

const HelpfulQA = ({ data, handleHelpfulClick, handleAddAnswer, question, handleQuestionReportClick}) => {
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
          handleAddAnswer={handleAddAnswer}
          className={sharedClasses + " status"}
          question={question}
        />,
        <Report
        key={5}
        handleReportClick={handleQuestionReportClick}
        className={sharedClasses + "status"}
        />
      ]}
    />
  );
};

export default HelpfulQA;