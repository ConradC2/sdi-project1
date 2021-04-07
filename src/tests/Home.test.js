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

//TopRated Section Tests
test('Renders a "TopRated" section', () => {
  const TopRatedHeading = screen.getByRole('heading', {name: 'Top Rated'});
  expect(TopRatedHeading).toBeInTheDocument();
});

test('Renders section for the Top Rated movie cards', () => {
  const TopRatedSection = screen.getByRole('ratedGrid');
  expect(TopRatedSection).toBeInTheDocument();
});

//Suggested Tests
test('Renders a "Suggested" section', () => {
  const SuggestedHeading = screen.getByRole('heading', {name: 'Suggested'});
  expect(SuggestedHeading).toBeInTheDocument();
});

test('Renders section for the Suggested movie cards', () => {
  const SuggestedSection = screen.getByRole('suggestedGrid');
  expect(SuggestedSection).toBeInTheDocument();
});