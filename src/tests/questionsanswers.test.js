import React from 'react';
import {render, screen} from '@testing-library/react';
import QuestionsAnswers from '../components/QuestionsAnswers';

// placeholder test
function sum (a, b) {
  return a + b;
};

test('adds 1 + 2 and returns 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('renders correctly', () => {
  render(<QuestionsAnswers />);
});