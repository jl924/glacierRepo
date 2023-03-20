import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from '../components/Overview/Header';



test('renders company name correctly', function () {
  const {getByText} = render(<Header />);
  let element = getByText('BENJ');
  expect(element).toBeTruthy();
});