import React, {useState, useEffect} from 'react';
import Answer from './Answer.js';
import QaStatus from '../sharedComponents/QaStatus.js';
import HelpfulQA from './HelpfulQA.js';
import {useSelector, useDispatch} from 'react-redux';
import questionsAnswersSlice from '../../reducers/questionsAnswersSlice.js'
import { apiPutRequest } from "../../helpers/api.js";
import './QACss/QAScrollbar.css';
import axios from 'axios';

// Question component to house:
// Answer and HelpfulStatus components
const Question = ({loadMore, setLoadMore, handleAddAnswer, product, moreQuestions}) => {

  const filteredQuestions = useSelector((state) => state.questionsAnswersReducer.filteredQuestions);

  const [displayAnswers, setDisplayAnswers] = useState(true);
  const [clickedQuestionIndex, setClickedQuestionIndex] = useState(null);
  let [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  var firstFour = filteredQuestions.slice(0,4);

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

  var handleQuestionReportClick = (e, question) => {
    // report question
    apiPutRequest(`/qa/questions/${question.question_id}/report`)
    .then(() => {
      dispatch(questionsAnswersSlice.actions.removeQuestion({question_id: question.question_id}))
    }).catch((err) => {
      console.log('An err occured trying to report this question', err);
    });
    // update report button to read Thanks!
  };

  var handleQuestionDisplay = (e, index) => {
    e.preventDefault();
    // setDisplayAnswers(!displayAnswers);
    setClickedQuestionIndex(clickedQuestionIndex === index ? null: index);
    setLoadMore(false);
  };

  return (
    <div className='max-h-[700px] overflow-y-auto hideQAScroll'>
      {moreQuestions ?
      <div>
      {firstFour.map((question, index) => {
        return (
          <div key={question.question_id + '/' + question.question_helpfulness} className='question py-7 max-h-[600px] overflow-y-auto'>
            <h3>
              <span className='QAheader text-lg'>Q: </span>
              <a key={index} className ='questionHeader font-bold text-lg' onClick={(e) => handleQuestionDisplay(e, index)} href=''>{question.question_body}</a>
              <span className='float-right'>
                <HelpfulQA
                  handleQuestionReportClick={(e) => handleQuestionReportClick(e, question)}
                  handleHelpfulClick={(e) => handleQuestionHelpfulClick(e, question)}
                  data={handleHelpfulCount(question)}
                  handleAddAnswer={handleAddAnswer}
                  question={question} />
              </span>
              {console.log(question)}
            </h3>
            { (Object.keys(question.answers).length > 0) ?
            <Answer answers={question.answers}
              QaStatus={QaStatus}
              loadMore={loadMore}
              firstTwo={getFirstTwo(question)}
              setLoadMore={setLoadMore}
              hideClicked={clickedQuestionIndex === index}
              clickedQuestionIndex={clickedQuestionIndex} />
            : <small className='px-5'>No answers, be the first!</small>}
          </div>
        )
      })}
    </div>
    :
    <div>
      {filteredQuestions.map((question, index) => {
        return (
          <div key={question.question_id + '/' + question.question_helpfulness} className='question py-10 max-h-[600px] overflow-y-auto'>
            <h3>
              <span className='QAheader text-lg'>Q: </span>
              <a key={index} className ='questionHeader font-bold text-lg' onClick={(e) => handleQuestionDisplay(e, index)} href=''>{question.question_body}</a>
              <span className='float-right'>
                <HelpfulQA
                  handleQuestionReportClick={(e) => handleQuestionReportClick(e, question)}
                  handleHelpfulClick={(e) => handleQuestionHelpfulClick(e, question)}
                  data={handleHelpfulCount(question)}
                  handleAddAnswer={handleAddAnswer}
                  question={question} />
              </span>
            </h3>
            { (Object.keys(question.answers).length > 0) ?
            <Answer answers={question.answers}
              QaStatus={QaStatus}
              loadMore={loadMore}
              firstTwo={getFirstTwo(question)}
              setLoadMore={setLoadMore}
              hideClicked={clickedQuestionIndex === index}
              clickedQuestionIndex={clickedQuestionIndex} />
            : <small className='px-5'>No answers, be the first!</small>}
          </div>
        )
      })}
    </div>}
    </div>
  );

};

export default Question;