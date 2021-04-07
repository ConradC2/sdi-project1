import { render, screen } from '@testing-library/react';
import App from './../App';



test('renders Watch This NavBar that has Home text ', () => {
  render(<SearchResults />);
  const HomeElement = screen.getByText(//i);
  expect(HomeElement).toBeInTheDocument();
});