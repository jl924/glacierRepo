import React from 'react';

const Answer = ({answers, QaStatus, loadMore, firstTwo}) => {
  let answerId = Object.keys(answers);

  var handleAnswerHelpfulClick = () => {

  };

  var handleAnswerReportClick = () => {

  };

  return (
    <div>
      {loadMore ? <h4>
        {answerId.map((id) => {
          return (
            <div key={id} className='container mx-auto py-4'>
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
            <div key={id} className='container mx-auto py-4'>
              <p><span className='QAheader'>A: </span>{answers[id].body}</p>
              <div className='px-4'>
                <QaStatus data={{reviewer_name: answers[id].answerer_name, date: answers[id].date, helpfulCount: answers[id].helpfulness}} handleAnswerHelpfulClick={handleAnswerHelpfulClick} handleAnswerReportClick={handleAnswerReportClick}/>
              </div>
            </div>
          );
        })}
        </h4>}
    </div>
  );
};

export default Answer;