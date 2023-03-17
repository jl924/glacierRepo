import React from 'react';
import {render, screen} from '@testing-library/react';
import QuestionsAnswers from '../components/QuestionsAnswers';

//Review jest-dom test functions like toBeInTheDocument(). Currently not working.


test('renders correctly and contains a question', function () {
  const {getByText} = render(<QuestionsAnswers />);
  let element = getByText('Questions & Answers');
  expect(element).toBeTruthy();
});