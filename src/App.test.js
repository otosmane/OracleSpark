// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OracleSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OracleSpark/i);
    expect(titleElement).toBeInTheDocument();
});
