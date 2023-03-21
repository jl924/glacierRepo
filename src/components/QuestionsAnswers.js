import React, {useState, useEffect} from 'react';
import SearchQA from './QuestionsAnswers/SearchQA.js';
import Question from './QuestionsAnswers/Question.js';
import exampleQuestion from '../exampleData/questionsForOneProduct.json';
import ButtonPair from './sharedComponents/ButtonPair.js';
import LoadMoreAnswers from './QuestionsAnswers/LoadMoreAnswers.js';
import AddQAModal from './QuestionsAnswers/AddQAModal.js';

const QuestionsAnswers = () => {

  const [loadMore, setLoadMore] = useState(false);
  const [questionForm, setQuestionForm] = useState(false);
  const [answerForm, setAnswerForm] = useState(false);

  var handleLoadMoreAnswers = (e) => {
    e.preventDefault();
    setLoadMore(true);
  };

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
        <SearchQA />
        <div>
          <Question exampleQuestion={exampleQuestion}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          handleAddAnswer={handleAddAnswer}/>
        </div>
        <LoadMoreAnswers exampleQuestion={exampleQuestion} handleLoadMoreAnswers={handleLoadMoreAnswers} />
        <ButtonPair
          buttons={{
            ["More Answered Questions"]: handleMoreQuestionsClick,
            ["Add A Question"]: handleAddQuestionClick,
          }}
        />
        {answerForm ? <AddQAModal setQuestionForm={setQuestionForm}
        setAnswerForm={setAnswerForm}
        answerForm={answerForm}
        questionForm={questionForm} /> : null}
        {questionForm ? <AddQAModal setQuestionForm={setQuestionForm}
        setAnswerForm={setAnswerForm}
        answerForm={answerForm}
        questionForm={questionForm} /> : null}
      </div>
    </>

  );

  module.exports.handleLoadMoreAnswers = handleLoadMoreAnswers;
}

export default QuestionsAnswers;