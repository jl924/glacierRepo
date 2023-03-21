import React, {useState, useEffect} from 'react';
import Answer from './Answer.js';
import QaStatus from '../sharedComponents/QaStatus.js';
import HelpfulQA from './HelpfulQA.js';

// Question component to house:
// Answer and HelpfulStatus components
const Question = ({exampleQuestion, loadMore, setLoadMore}) => {

  const [displayAnswers, setDisplayAnswers] = useState(false);

  let question = exampleQuestion.results[0];
  let firstTwo = Object.keys(question.answers).slice(0,2);


  let helpfulQuestionCount = {
    helpfulCount: question.question_helpfulness
  };

  var handleQuestionHelpfulClick = () => {

  };

  var handleQuestionReportClick = () => {

  };

  var handleAddAnswer = () => {

  };

  var handleQuestionDisplay = (e) => {
    e.preventDefault();
    setDisplayAnswers(!displayAnswers);
    setLoadMore(false);
  };

  // need Add Answer button next to HelpFulStatus
  return (
    <div className='question py-10'>
      <h3>
        <span className='QAheader'>Q: </span>
        <a className ='questionHeader' onClick={handleQuestionDisplay} href=''>{question.question_body}</a>
        <span className='float-right'>
          <HelpfulQA
          handleQuestionHelpfulClick={handleQuestionHelpfulClick}
          data={helpfulQuestionCount}
          handleAddAnswer={handleAddAnswer} />
        </span>
      </h3>
      {displayAnswers ? <Answer answers={question.answers} QaStatus={QaStatus} loadMore={loadMore} firstTwo={firstTwo} /> : null}
    </div>
  );

  module.exports.handleQuestionDisplay = handleQuestionDisplay;
  module.exports.displayAnswers = displayAnswers;
};

export default Question;