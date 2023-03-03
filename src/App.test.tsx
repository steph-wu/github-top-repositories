import App from './App'
import { renderWithProviders } from './utils/testUtils'
import { screen } from '@testing-library/react';

describe('App', () => {
  it('renders leaderboard by default', () => {
    renderWithProviders(<App />);
  
    const title = screen.getByText(/leaderboard/i)

    expect(title).toBeInTheDocument();
  });
})

