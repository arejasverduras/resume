import { render, screen } from '@testing-library/react';
import App from './App';

test('should use Router', () => {
  render(<App />);
  
  expect(linkElement).toBeInTheDocument();
});
