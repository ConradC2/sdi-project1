import { render, screen } from '@testing-library/react';
import App from './../App';

beforeEach(() => {
  // Render the App before each test.
  render(<App/>)
});

test('Renders a header with text About ', () => {
    const AboutElement = screen.getByText(/About/i);
    expect(AboutElement).toBeInTheDocument();
  });

  test('Renders element with a students name ', () => {
    const Derek = screen.getByText(/Dolla dolla bills y'all!/i);
    expect(Derek).toBeInTheDocument();
  });


  test('Renders an element with the id of Attribution ', () => {
    const attributionId = screen.getByText(/attribution/i);
    expect(attributionId).toBeInTheDocument();
  });  

  