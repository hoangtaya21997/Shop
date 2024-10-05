// Input.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index';

describe('Input Component', () => {
  test('renders input with default props', () => {
    render(<Input placeholder="Enter text" />);
    
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input'); // Kiểm tra class mặc định
  });

  test('renders input with custom className', () => {
    render(<Input className="custom-class" placeholder="Enter text" />);
    
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toHaveClass('custom-class'); // Kiểm tra className tùy chỉnh
  });

  test('renders input with error message', () => {
    render(<Input errorMessage="This field is required" placeholder="Enter text" />);
    
    const errorMessageElement = screen.getByText(/this field is required/i);
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass('error-message'); // Kiểm tra class cho thông báo lỗi
  });

  test('renders input with icon class', () => {
    render(<Input icon="icon-class" placeholder="Enter text" />);
    
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toHaveClass('icon-class'); // Kiểm tra class icon
  });
});
