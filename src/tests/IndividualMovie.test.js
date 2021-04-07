import { render, screen } from '@testing-library/react';
import App from './../App';


beforeEach(() => {
  // Render the App before each test.
  render(<App/>)
});

//Individual Movie Tests
test('Renders an "Individual Movie" section', () => {
    const IndivMoviedHeading = screen.getByRole('TitleHeading');
    expect(IndivMovieHeading).toBeInTheDocument();
});