import { render, screen } from '@testing-library/react';
import App from './../App';



test('Renders a footer with the text "Link to the Movie Database" ', () => {
  render(<Footer />);
  const HomeElement = screen.getByText(/Link to The Movie Database/i);
  expect(HomeElement).toBeInTheDocument();
});
