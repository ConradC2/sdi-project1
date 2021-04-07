import { render, screen } from '@testing-library/react';
import App from './../App';


test('Renders the text Search Results on the Search results page ', () => {
    render(<SearchResults />);
    const HomeElement = screen.getByText(/Search Results/i);
    expect(HomeElement).toBeInTheDocument();
  });