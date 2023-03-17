import React from 'react';

const Answer = ({answers, QaStatus}) => {
  let answerId = Object.keys(answers);

  var handleAnswerHelpfulClick = () => {

  };

  var handleAnswerReportClick = () => {

  };

  return (
    <div>
      <h4>
        {answerId.map((id) => {
          return (
            <div key={id} className='container mx-auto px-10 py-4'>
              <p>A: {answers[id].body}</p>
              <QaStatus data={{reviewer_name: answers[id].answerer_name, date: answers[id].date, helpfulCount: answers[id].helpfulness}} handleAnswerHelpfulClick={handleAnswerHelpfulClick} handleAnswerReportClick={handleAnswerReportClick}/>
            </div>
          );
        })}
        </h4>
    </div>
  );
};

export default Answer;