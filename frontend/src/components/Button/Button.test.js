// Button.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  test('renders button with default props', () => {
    render(<Button />);
    
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('button'); // Kiểm tra nội dung mặc định
    expect(buttonElement).toHaveClass('button'); // Kiểm tra class mặc định
  });

  test('renders button with custom text', () => {
    render(<Button text="Click Me" />);
    
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click Me'); // Kiểm tra nội dung tùy chỉnh
  });

  test('renders button with custom className', () => {
    render(<Button className="custom-class" />);
    
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-class'); // Kiểm tra className tùy chỉnh
  });

  test('renders button with error message', () => {
    render(<Button errorMessage="This action is not allowed" />);
    
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('error'); // Kiểm tra class error
  });
});
