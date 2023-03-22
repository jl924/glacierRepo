import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SearchQA from './QuestionsAnswers/SearchQA.js';
import Question from './QuestionsAnswers/Question.js';
import exampleQuestion from '../exampleData/questionsForOneProduct.json';
import ButtonPair from './sharedComponents/ButtonPair.js';
import AddQAModal from './QuestionsAnswers/AddQAModal.js';
import questionsAnswersSlice from '../reducers/questionsAnswersSlice.js';
import axios from 'axios';

const QuestionsAnswers = () => {

  const token = process.env.API_KEY;

  const headers = {
    'Authorization': token
  };

  var getQuestionsById = (id) => {
     return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${id}`, {headers})
    .then((response) => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
  };

  const product = useSelector(
    (state => state.selectedProductReducer.selectedProduct)
  );

  const questions = useSelector(
    (state) => state.questionsAnswersReducer.questionsAnswers
  );

  // const dispatch = useDispatch();
  // // dispatch(questionsAnswersSlice.actions.questionsAnswersRequest());
  // useEffect(() => {
  //   getQuestionsById(product.id).then(response => {
  //     dispatch(questionsAnswersSlice.actions.questionsAnswersRequestSuccess(response.results));
  //   });
  // }, [product]);

  const [loadMore, setLoadMore] = useState(false);
  const [questionForm, setQuestionForm] = useState(false);
  const [answerForm, setAnswerForm] = useState(false);

  var handleAddQuestionClick = () => {
    setQuestionForm(true);
    console.log('adding a question!')
  };

  var handleMoreQuestionsClick = () => {

  };

  var handleAddAnswer = () => {
    setAnswerForm(true);
    console.log('Adding an Answer!');
  };

  return (
    <>
      <div className='container mx-auto border text-black-700 text-left bg-white-400 px-4 py-2'>
        <h4 className='Q&A-heading'>Questions & Answers</h4>
        <SearchQA questions={questions} />
        <div>
          <Question questions={questions}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          handleAddAnswer={handleAddAnswer}
          product={product} />
        </div>
        <ButtonPair
          buttons={{
            ["More Answered Questions"]: handleMoreQuestionsClick,
            ["Add A Question"]: handleAddQuestionClick,
          }}
        />
        {answerForm ? <AddQAModal setQuestionForm={setQuestionForm}
        setAnswerForm={setAnswerForm}
        answerForm={answerForm}
        questionForm={questionForm}
        product={product}
        exampleQuestion={exampleQuestion} /> : null}
        {questionForm ? <AddQAModal setQuestionForm={setQuestionForm}
        setAnswerForm={setAnswerForm}
        answerForm={answerForm}
        questionForm={questionForm}
        product={product}
        exampleQuestion={exampleQuestion} /> : null}
      </div>
    </>

  );
}

export default QuestionsAnswers;