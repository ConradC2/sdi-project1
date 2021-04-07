import { render, screen } from '@testing-library/react';
import App from './../App';


beforeEach(() => {
  // Render the App before each test.
  render(<App/>)
});

//NavBar Tests
test('Renders Watch This NavBar that has Home text ', () => {
  const HomeElement = screen.getByText(/Home/i);
  expect(HomeElement).toBeInTheDocument();
});

test('Renders "WATCH THIS" NavBar that has About text', () => {
  const AboutElement = screen.getByText(/About/i);
  expect(AboutElement).toBeInTheDocument();
});

test('Renders Watch this NavBar that has Watch List text', () => {
  const WatchListElement = screen.getByText(/Watch List/i);
  expect(WatchListElement).toBeInTheDocument();
});

test('Renders Watch this header text', () => {
  const WatchListElement = screen.getByText(/Watch This/i);
  expect(WatchListElement).toBeInTheDocument();
});

//SearchBar Tests
test('Renders a search bar', () => {
  const SearchElement = screen.getByRole('searchbox');
  expect(SearchElement).toBeInTheDocument();
});

test('Placeholder text shows "Search by Title"', () => {
  const PlaceholderText = screen.getByPlaceholderText('Search by Title');
  expect(PlaceholderText).toBeInTheDocument();
});

test('Has a search button', () => {
    const SearchButton = screen.getByRole('button');
    expect(SearchButton).toBeInTheDocument();
});