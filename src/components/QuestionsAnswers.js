import React from 'react';
import SearchQA from './QuestionsAnswers/SearchQA.js';
import Question from './QuestionsAnswers/Question.js';
import HelpfulStatus from './sharedComponents/HelpfulStatus.js';
import Username from './sharedComponents/Username.js';

const QuestionsAnswers = () => {
  return (
    <>
      <div className='container mx-auto border text-black-700 text-left bg-white-400 px-4 py-2'>
        <h4 className='Q&A-heading'>Questions & Answers</h4>
        <SearchQA />
        <div>
          <Question />
        </div>
        <button className='more-questions btn btn-outline'>More Answered Questions +</button>
        <button className=' add-question btn btn-outline'>Add A Question +</button>
      </div>
    </>

  );
}

export default QuestionsAnswers;