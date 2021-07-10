import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('Header contains correct text', () => {
  render(<Header />);
  const text = screen.getByText('{Project 1}');
  expect(text).toBeInTheDocument();
});
