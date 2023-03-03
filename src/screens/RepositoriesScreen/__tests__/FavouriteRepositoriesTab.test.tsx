import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../../utils/testUtils'
import { cleanup, screen } from '@testing-library/react'
import { mockRepositoriesState } from '../../../domains/repository/testUtils';
import FavouriteRepositoriesTab from '../components/FavouriteRepositoriesTab';

jest.mock('axios')
const user = userEvent.setup()

afterEach(() => {
  cleanup()
})

describe('<FavouriteRepositories />', () => {
  it('renders correctly', async () => {
    renderWithProviders(
      <FavouriteRepositoriesTab />,
      { preloadedState: {
        repositories: {
          ...mockRepositoriesState
        }
      }}
    )

    const title = await screen.findByText(/favourite/i)
    const subtitle = await screen.findByText(/github repositories/i)
    const repoItems = await screen.findAllByTestId('repositoryItem')
    const name = await screen.findByText('chatgpt-demo')
    const starCount = await screen.findByText('1182')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(repoItems).toHaveLength(2)
    expect(name).toBeInTheDocument()
    expect(starCount).toBeInTheDocument()
  })

  it('removes repository when user unfavourites', async () => {
    renderWithProviders(
      <FavouriteRepositoriesTab />,
      { preloadedState: {
        repositories: {
          ...mockRepositoriesState
        }
      }}
    )

    const unfavButtons = await screen.findAllByTestId('unfavouriteRepo')

    expect(unfavButtons).toHaveLength(2)

    await user.click(unfavButtons[0])

    const repoItems = await screen.findAllByTestId('repositoryItem')
    const unfavButton = await screen.findAllByTestId('unfavouriteRepo')

    expect(repoItems).toHaveLength(1)
    expect(unfavButton).toHaveLength(1)
  })

  it('render empty state', async () => {
    renderWithProviders(<FavouriteRepositoriesTab />)

    const emptyText = await screen.findByText(/you have no favourited repositories./i)

    expect(emptyText).toBeInTheDocument()
  })
})

