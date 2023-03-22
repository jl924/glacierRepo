import React from 'react';
import LoadMoreAnswers from './LoadMoreAnswers.js';

const Answer = ({answers, QaStatus, loadMore, firstTwo, setLoadMore, displayAnswers}) => {
  let answerId = Object.keys(answers);



  var handleAnswerHelpfulClick = () => {

  };

  var handleAnswerReportClick = () => {

  };

  var handleLoadMoreAnswers = (e) => {
    e.preventDefault();
    setLoadMore(true);
  };

  return (
    <div>
      {displayAnswers ? <div>
      {loadMore ? <h4>
        {answerId.map((id) => {
          return (
            <div key={id} className='container mx-auto py-4 px-2'>
              <p><span className='QAheader'>A: </span>{answers[id].body}</p>
              <div className='px-4'>
                <QaStatus data={{reviewer_name: answers[id].answerer_name, date: answers[id].date, helpfulCount: answers[id].helpfulness}} handleAnswerHelpfulClick={handleAnswerHelpfulClick} handleAnswerReportClick={handleAnswerReportClick}/>
              </div>
            </div>
          );
        })}
        </h4> :
        <h4>
        {firstTwo.map((id) => {
          return (
            <div key={id} className='container mx-auto py-4 px-2'>
              <p><span className='QAheader'>A: </span>{answers[id].body}</p>
              <div className='px-4'>
                <QaStatus data={{reviewer_name: answers[id].answerer_name, date: answers[id].date, helpfulCount: answers[id].helpfulness}} handleAnswerHelpfulClick={handleAnswerHelpfulClick} handleAnswerReportClick={handleAnswerReportClick}/>
              </div>
            </div>
          );
        })}
        </h4>}
        <LoadMoreAnswers handleLoadMoreAnswers={handleLoadMoreAnswers} />
    </div>: null}
    </div>
  );
};

export default Answer;