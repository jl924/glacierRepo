import React from 'react';
import SearchQA from './QuestionsAnswers/SearchQA.js';
import Question from './QuestionsAnswers/Question.js';
import exampleQuestion from '../exampleData/questionsForOneProduct.json';
import ButtonPair from './sharedComponents/ButtonPair.js';

const QuestionsAnswers = () => {

  var handleAddQuestionClick = () => {

  };

  var handleMoreQuestionsClick = () => {

  };

  return (
    <>
      <div className='container mx-auto border text-black-700 text-left bg-white-400 px-4 py-2'>
        <h4 className='Q&A-heading'>Questions & Answers</h4>
        <SearchQA />
        <div>
          <Question exampleQuestion={exampleQuestion} />
        </div>
        <ButtonPair
          buttons={{
            ["More Answered Questions"]: handleMoreQuestionsClick,
            ["Add A Question"]: handleAddQuestionClick,
          }}
        />
      </div>
    </>

  );
}

export default QuestionsAnswers;