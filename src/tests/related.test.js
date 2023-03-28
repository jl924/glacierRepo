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

  it('renders correctly and contains Related Items', function () {
    let element = getByText('Related Items');
    expect(element).toBeTruthy();
  });



});