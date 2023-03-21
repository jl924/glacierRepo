import React, {useEffect, useState} from 'react';
import AddAnswerForm from './AddAnswerForm.js';
import AddQuestionForm from './AddQuestionForm.js';
import './QACss/QAModal.css';

const AddQAModal = ({setAnswerForm, setQuestionForm, answerForm, questionForm}) => {

  var handleClosingModal = (e) => {
    e.preventDefault();
    setQuestionForm(false);
    setAnswerForm(false);
  };

  return (
    <div className='QAmodal'>
      <div className='QAmodalcontent container mx-auto py-3'>
        <a href='' className='float-right' onClick={handleClosingModal}>&times;</a>
        {answerForm ? <AddAnswerForm /> : null}
        {questionForm ? <AddQuestionForm /> : null}
      </div>
    </div>
  );
};

export default AddQAModal;