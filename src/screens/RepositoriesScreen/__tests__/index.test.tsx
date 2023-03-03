import { renderWithProviders } from '../../../utils/testUtils'
import { screen } from '@testing-library/react'
import RepositoriesScreen from '../index';

describe('<RepositoriesScreen />', () => {
  it('renders correctly', async () => {
    renderWithProviders(<RepositoriesScreen />)

    const leaderboardNav = screen.getByText(/leaderboard/i)
    const favouritesNav = screen.getByText(/favourites/i)

    expect(leaderboardNav).toBeInTheDocument()
    expect(favouritesNav).toBeInTheDocument()
  })
})
