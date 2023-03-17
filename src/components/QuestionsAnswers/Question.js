import React from 'react';
import Answer from './Answer.js';
import QaStatus from '../sharedComponents/QaStatus.js';
import HelpfulStatus from '../sharedComponents/HelpfulStatus.js';

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


  return (
    <div>
      <h3>Q: {question.question_body}<span className='float-right'><HelpfulStatus handleQuestionHelpfulClick={handleQuestionHelpfulClick} handleQuestionReportClick={handleQuestionReportClick} data={helpfulQuestionCount} /></span></h3>
      <Answer answers={question.answers} QaStatus={QaStatus} />
    </div>
  );

};

export default Question;