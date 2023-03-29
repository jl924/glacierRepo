import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Overview/Header';

test('renders company name and logo correctly', function () {
  render(<Header />);


  // Check if the image with alt text "Benj logo" is rendered
  const logoElement = screen.getByAltText('Benj logo');
  expect(logoElement).toBeInTheDocument();
});