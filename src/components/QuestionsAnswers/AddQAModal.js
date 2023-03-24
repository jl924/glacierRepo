import React, {useEffect, useState} from 'react';
import AddAnswerForm from './AddAnswerForm.js';
import AddQuestionForm from './AddQuestionForm.js';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import './QACss/QAModal.css';

const AddQAModal = ({setAnswerForm, setQuestionForm, answerForm, questionForm, product, question}) => {

  var handleClosingModal = (e) => {
    e.preventDefault();
    setQuestionForm(false);
    setAnswerForm(false);
  };

  return (
    <div className='QAmodal'>
      <div className='QAmodalcontent bg-base-300 flex h-[750px] w-[500px] flex-col items-center justify-center'>
        <a href='' className='flex flex-row justify-end w-full mr-[10px]' onClick={handleClosingModal}><AiOutlineCloseSquare/></a>
        {answerForm ? <AddAnswerForm className='flex flex-row justify-end mr-[10px] w-full h-full' product={product} question={question} setAnswerForm={setAnswerForm}/> : null}
        {questionForm ? <AddQuestionForm className='flex flex-row justify-end mr-[10px] w-full h-full' product={product} /> : null}
      </div>
    </div>
  );
};

export default AddQAModal;