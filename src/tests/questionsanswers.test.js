import React, {useState, useEffect} from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import QuestionsAnswers from '../components/QuestionsAnswers';
import LoadMoreAnswers from '../components/QuestionsAnswers/LoadMoreAnswers.js';
import Question from '../components/QuestionsAnswers/Question.js'
import exampleQuestion from '../exampleData/questionsForOneProduct.json';

const {handleLoadMoreAnswers} = require('../components/QuestionsAnswers.js');
const {handleQuestionDisplay} = require('../components/QuestionsAnswers/Question.js');

//Review jest-dom test functions like toBeInTheDocument(). Currently not working.

describe('Questions Component', function () {

  it('renders correctly and contains a question', function () {
    const {getByText} = render(<QuestionsAnswers />);
    let element = getByText('Questions & Answers');
    expect(element).toBeTruthy();
  });

  // temporary
  it('renders one question on load, 2 answers on click', function () {
    const {queryAllByText, container, getByText} = render(<QuestionsAnswers />);
    expect(container.querySelectorAll('.question').length).toBe(1);
  });

  it('click on load more answers', function() {
    const handleLoadMoreAnswersSpy = jest.fn();

    const {getByText} = render(<LoadMoreAnswers handleLoadMoreAnswers={handleLoadMoreAnswersSpy}/>);
    fireEvent.click(getByText('Load More Answers'));

    expect(handleLoadMoreAnswersSpy).toHaveBeenCalled();

  });



});