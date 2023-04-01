import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Overview/Header';

test('renders company logo', function () {
  render(<Header />);
  const logoElement = screen.getByAltText('Benj logo');
  expect(logoElement).toBeInTheDocument();
});

test('renders company logo', function () {
  render(<Header />);
  const logoElement = screen.getByAltText('Benj logo');
  expect(logoElement).toBeInTheDocument();
});

