import React, {useState, useEffect} from 'react';
import Answer from './Answer.js';
import QaStatus from '../sharedComponents/QaStatus.js';
import HelpfulQA from './HelpfulQA.js';
import {useSelector, useDispatch} from 'react-redux';
import questionsAnswersSlice from '../../reducers/questionsAnswersSlice.js'
import { apiPutRequest } from "../../helpers/api.js";
import axios from 'axios';

// Question component to house:
// Answer and HelpfulStatus components
const Question = ({questions, loadMore, setLoadMore, handleAddAnswer, product}) => {

  const [displayAnswers, setDisplayAnswers] = useState();
  let [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  let getFirstTwo = (question) => {
    let firstTwo = Object.keys(question.answers).slice(0,2);
    return firstTwo;
  }

  let handleHelpfulCount = (question) => {
    return {
      helpfulCount: question.question_helpfulness
    };
  };

  const token = process.env.API_KEY;

  const headers = {
    'Authorization': token
  };

  var handleQuestionHelpfulClick = (e, question) => {

    let id = question.question_id;
    console.log(id, question)

    if (!loading) {
      setLoading(true);
      apiPutRequest(`/qa/questions/${question.question_id}/helpful`)
        .then(() => {
          dispatch(questionsAnswersSlice.actions.incrementHelpfulness({ question_id: question.question_id }));
        })
        .catch((err) => {
          console.log("error occured when trying to increase helpfulness", err);
        })
        .finally(() => setLoading(false));
    }
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
                handleHelpfulClick={(e) => handleQuestionHelpfulClick(e, question)}
                data={handleHelpfulCount(question)}
                handleAddAnswer={handleAddAnswer}
                question={question} />
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