import React, {useEffect, useState} from 'react';
import LoadMoreAnswers from './LoadMoreAnswers.js';
import {useSelector, useDispatch} from 'react-redux';
import questionsAnswersSlice from '../../reducers/questionsAnswersSlice.js'
import { apiPutRequest } from "../../helpers/api.js";


const Answer = ({answers, QaStatus, loadMore, firstTwo, setLoadMore, displayAnswers, loadMoreVisible}) => {
  const dispatch = useDispatch();
  let answerId = Object.keys(answers);

  let [loading, setLoading] = useState(false);

  var handleAnswerHelpfulClick = (e, answerId) => {
    if (!loading) {
      setLoading(true);
      apiPutRequest(`/qa/answers/${answerId}/helpful`)
        .then(() => {
          dispatch(questionsAnswersSlice.actions.incrementAnswerHelpfulness({ answers: answerId }));
        })
        .catch((err) => {
          console.log("error occured when trying to increase helpfulness", err);
        })
        .finally(() => setLoading(false));
    }
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
                <QaStatus data={{reviewer_name: answers[id].answerer_name, date: answers[id].date, helpfulCount: answers[id].helpfulness}}
                handleHelpfulClick={(e) => handleAnswerHelpfulClick(e, id)}
                handleReportClick={handleAnswerReportClick}/>
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
                <QaStatus data={{reviewer_name: answers[id].answerer_name, date: answers[id].date, helpfulCount: answers[id].helpfulness}}
                handleHelpfulClick={(e) => handleAnswerHelpfulClick(e, id)}
                 handleReportClick={handleAnswerReportClick}/>
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