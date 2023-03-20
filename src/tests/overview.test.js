import React from 'react';
import {render, screen} from '@testing-library/react';
import OverView from '../components/Overview';



test('renders correctly and contains a question', function () {
  const {getByText} = render(<OverView />);
  let element = getByText('BENJ');
  expect(element).toBeTruthy();
});