import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRepositoryItem, mockFavRepositoryItem, mockRepositoriesState } from '../../../domains/repository/testUtils';
import RepositoryItem from '../components/RepositoryItem';
import { renderWithProviders } from '../../../utils/testUtils';

const user = userEvent.setup()

afterEach(() => {
  cleanup()
})

describe('<RepositoryItem />', () => {
  it('renders correctly', async () => {
    const props = { repository: mockRepositoryItem, description: true }

    renderWithProviders(
      <RepositoryItem {...props} />,
      { preloadedState: {
        repositories: {
          ...mockRepositoriesState
        }
      }}
    )

    const name = await screen.findByText(mockRepositoryItem.name)
    const starCount = await screen.findByText(mockRepositoryItem.stars)
    
    expect(name).toBeInTheDocument()
    expect(starCount).toBeInTheDocument()

    const description = await screen.findByText(mockRepositoryItem.description!!)
    expect(description).toBeInTheDocument()
  })

  it('renders favourited repository correctly', async () => {
    const props = { repository: mockFavRepositoryItem, description: true }

    renderWithProviders(
      <RepositoryItem {...props} />,
      { preloadedState: {
        repositories: {
          ...mockRepositoriesState
        }
      }}
    )

    const unfavButton = await screen.findByTestId('unfavouriteRepo')

    expect(unfavButton).toBeInTheDocument()
  })

  it('renders correctly when user toggles favourite button', async () => {
    const props = { repository: mockRepositoryItem, description: true }

    renderWithProviders(
      <RepositoryItem {...props} />,
      { preloadedState: {
        repositories: {
          ...mockRepositoriesState
        }
      }}
    )

    // click favourite button
    const favButton = await screen.findByTestId('favouriteRepo')
    await user.click(favButton)

    // unfavourite button should appear
    expect(await screen.findByTestId('unfavouriteRepo')).toBeInTheDocument()
    expect(screen.queryByTestId('favouriteRepo')).toBeNull()

    // click unfavourite button
    const unfavButton = await screen.findByTestId('unfavouriteRepo')
    await user.click(unfavButton)

    // favourite button should appear
    expect(await screen.findByTestId('favouriteRepo')).toBeInTheDocument()
    expect(screen.queryByTestId('unfavouriteRepo')).toBeNull()
  })
})

