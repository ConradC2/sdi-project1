import { render, screen } from '@testing-library/react';
import App from './../App';

/****** START OF NAVBAR  TEST   ******/

test('renders Watch This NavBar that has Home text ', () => {
  render(<App />);
  const HomeElement = screen.getByText(/Home/i);
  expect(HomeElement).toBeInTheDocument();
});

test('Renders Watch this NavBar that has About text', () => {
  render(<App />);
  const AboutElement = screen.getByText(/About/i);
  expect(AboutElement).toBeInTheDocument();
});

test('Renders Watch this NavBar that has Watch List text', () => {
  render(<App />);
  const WatchListElement = screen.getByText(/Watch List/i);
  expect(WatchListElement).toBeInTheDocument();
});

test('Renders Watch this header text', () => {
  render(<App />);
  const WatchListElement = screen.getByText(/Watch This/i);
  expect(WatchListElement).toBeInTheDocument();
});


/****** END OF NAVBAR  TEST   ******/