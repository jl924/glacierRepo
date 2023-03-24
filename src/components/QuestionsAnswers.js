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

  const [loadMore, setLoadMore] = useState(false);
  const [questionForm, setQuestionForm] = useState(false);
  const [answerForm, setAnswerForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  const product = useSelector(
    (state => state.selectedProductReducer.selectedProduct)
  );

  const questions = useSelector(
    (state) => state.questionsAnswersReducer.questionsAnswers
  );

  const filteredQuestions = useSelector((state) => state.questionsAnswersReducer.filteredQuestions);

  const dispatch = useDispatch();


  dispatch(questionsAnswersSlice.actions.questionsAnswersRequest());
  useEffect(() => {
    console.log('PRODUCT CHANGED');
    getQuestionsById(product.id).then(response => {
      dispatch(questionsAnswersSlice.actions.questionsAnswersRequestSuccess(response.results));
    });
  }, [product]);

  useEffect(() => {
    dispatch(questionsAnswersSlice.actions.searchByTerm(searchTerm));
  }, [searchTerm, questions]);



  var onSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  var handleAddQuestionClick = () => {
    setQuestionForm(true);
    console.log('adding a question!')
  };

  var handleMoreQuestionsClick = () => {

  };

  const [answeringQuestion, setAnsweringQuestion] = useState('');
  var handleAddAnswer = (e, question) => {
    setAnswerForm(true);
    console.log(question);
    setAnsweringQuestion(question);
  };

  return (
    <>
      <div className='container mx-auto border text-black-700 text-left bg-white-400 px-4 py-2'>
        <h4 className='Q&A-heading'>Questions & Answers</h4>
        <SearchQA searchHandler={onSearch}/>
        <div>
          <Question questions={filteredQuestions}
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
        question={answeringQuestion} /> : null}
        {questionForm ? <AddQAModal setQuestionForm={setQuestionForm}
        setAnswerForm={setAnswerForm}
        answerForm={answerForm}
        questionForm={questionForm}
        product={product}
        question={answeringQuestion} /> : null}
      </div>
    </>

  );
}

export default QuestionsAnswers;