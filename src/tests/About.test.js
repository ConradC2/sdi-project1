import { render, screen } from '@testing-library/react';
import App from './../App';

test('Renders a header with text About ', () => {
    render(<About />);
    const AboutElement = screen.getByText(/About/i);
    expect(AboutElement).toBeInTheDocument();
  });

  test('Renders element with a students name ', () => {
    render(<About />);
    const DerekStudent = screen.getByText(/Derek/i);
    expect(DerekElement).toBeInTheDocument();
  });  


  test('Renders an element with the id of Attribution ', () => {
    render(<About />);
    const attributionId = screen.getByText(/attribution/i);
    expect(attributionId).toBeInTheDocument();
  });  

  