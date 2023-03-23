import React, {useState, useEffect} from 'react';
import Answer from './Answer.js';
import QaStatus from '../sharedComponents/QaStatus.js';
import HelpfulQA from './HelpfulQA.js';

// Question component to house:
// Answer and HelpfulStatus components
const Question = ({questions, loadMore, setLoadMore, handleAddAnswer, product}) => {

  const [displayAnswers, setDisplayAnswers] = useState();


  let getFirstTwo = (question) => {
    let firstTwo = Object.keys(question.answers).slice(0,2);
    return firstTwo;
  }

  let handleHelpfulCount = (question) => {
    return {
      helpfulCount: question.question_helpfulness
    };
  };

  var handleQuestionHelpfulClick = (e) => {

  };

  var handleQuestionReportClick = () => {

  };

  var handleQuestionDisplay = (e, index) => {
    e.preventDefault();
    setDisplayAnswers(!displayAnswers);
    setLoadMore(false);
  };

  return (
    <div>
      {questions.map((question, index) => {
        return (
          <div key={index + 10} className='question py-10'>
            <h3>
              <span className='QAheader'>Q: </span>
              <a key={index} className ='questionHeader' onClick={(e) => handleQuestionDisplay(e, index)} href=''>{question.question_body}</a>
              <span className='float-right'>
                <HelpfulQA
                handleQuestionHelpfulClick={handleQuestionHelpfulClick}
                data={handleHelpfulCount(question)}
                handleAddAnswer={handleAddAnswer} />
              </span>
             </h3>
              <Answer answers={question.answers}
              QaStatus={QaStatus}
              loadMore={loadMore}
              firstTwo={getFirstTwo(question)}
              setLoadMore={setLoadMore}
              displayAnswers={displayAnswers} />
          </div>
        )
      })}
    </div>
  );

};

export default Question;