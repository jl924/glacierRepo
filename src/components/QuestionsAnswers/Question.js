import React from 'react';
import Answer from './Answer.js';
import QaStatus from '../sharedComponents/QaStatus.js';
import HelpfulQA from './HelpfulQA.js';

// Question component to house:
// Answer and HelpfulStatus components
const Question = ({exampleQuestion}) => {
  let question = exampleQuestion.results[0];

  let helpfulQuestionCount = {
    helpfulCount: question.question_helpfulness
  };

  var handleQuestionHelpfulClick = () => {

  };

  var handleQuestionReportClick = () => {

  };

  var handleAddAnswer = () => {

  };

  // need Add Answer button next to HelpFulStatus
  return (
    <div>
      <h3>Q: {question.question_body}<span className='float-right'><HelpfulQA handleQuestionHelpfulClick={handleQuestionHelpfulClick}
      data={helpfulQuestionCount}
      handleAddAnswer={handleAddAnswer} />
      </span>
      </h3>
      <Answer answers={question.answers} QaStatus={QaStatus} />
    </div>
  );

};

export default Question;