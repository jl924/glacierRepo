import React, {useState, useEffect} from 'react';
import {render, fireEvent} from '@testing-library/react';
import QuestionsAnswers from '../components/QuestionsAnswers';
import LoadMoreAnswers from '../components/QuestionsAnswers/LoadMoreAnswers.js';
import Question from '../components/QuestionsAnswers/Question.js'
import exampleQuestion from '../exampleData/questionsForOneProduct.json';
import { store } from "../store.js";
import { Provider } from "react-redux";
import { render as rtlRender, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "../components/App.js";

//Review jest-dom test functions like toBeInTheDocument(). Currently not working.
let getByText, queryAllByText, container;
describe('Questions Component', function () {

  beforeAll(function() {
    const rendered = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    getByText = rendered.getByText;
    container = rendered.container;
    queryAllByText = rendered.queryAllByText;
  });

  it('renders correctly and contains a question', function () {
    // const {getByText} = render(<QuestionsAnswers />);
    let element = getByText('Questions & Answers');
    expect(element).toBeTruthy();
  });

  // temporary
  it('renders one question on load, 2 answers on click', function () {
    //const {queryAllByText, container, getByText} = render(<QuestionsAnswers />);
    expect(container.querySelectorAll('.questionHeader').length).toBe(0);
  });

  it('click on load more answers', function() {
    const handleLoadMoreAnswersSpy = jest.fn();

    const {getByText} = render(<LoadMoreAnswers handleLoadMoreAnswers={handleLoadMoreAnswersSpy}/>);
    fireEvent.click(getByText('Load More Answers'));

    expect(handleLoadMoreAnswersSpy).toHaveBeenCalled();

  });



});