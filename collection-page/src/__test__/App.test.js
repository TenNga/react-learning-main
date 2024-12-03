import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import Filter from '../components/Filter';


test('renders App component with heading', () => {
  render(<App />);
  waitFor(()=>{
    const collectionHeading = screen.findByText(/product list/i)
    expect(collectionHeading).toBeInTheDocument();
  })
});


