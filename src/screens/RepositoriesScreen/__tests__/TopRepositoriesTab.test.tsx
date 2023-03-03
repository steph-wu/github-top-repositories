import axios from 'axios'
import { renderWithProviders } from '../../../utils/testUtils'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockfetchRepositoriesResponse } from '../../../domains/repository/testUtils'
import TopRepositoriesTab from '../components/TopRepositoriesTab'

const mockedAxios = axios as jest.Mocked<typeof axios>;
const user = userEvent.setup()

beforeEach(() => {
  jest.resetAllMocks()
  mockedAxios.get.mockResolvedValue({ data: mockfetchRepositoriesResponse })
})

afterEach(() => {
  cleanup()
})

describe('<TopRepositoriesTab />', () => {
  it('renders correctly', async () => {
    renderWithProviders(<TopRepositoriesTab />)

    const name = await screen.findByText('semana-javascript-expert07')
    const starCount = await screen.findByText('1182')

    expect(name).toBeInTheDocument()
    expect(starCount).toBeInTheDocument()

    const repoItems = await screen.findAllByTestId('repositoryItem')
    const names = await screen.findAllByTestId('repoName')
    const favButton = await screen.findAllByTestId('favouriteRepo')
    const starCounts = await screen.findAllByTestId('starCount')

    expect(repoItems).toHaveLength(4)
    expect(names).toHaveLength(4)
    expect(favButton).toHaveLength(4)
    expect(starCounts).toHaveLength(4)

    const prevButton = await screen.findByText(/previous/i)
    const nextButton = await screen.findByText(/next/i)

    expect(prevButton).toBeDisabled()
    expect(nextButton).toBeInTheDocument()
  })

  it('renders correctly after user clicks next', async () => {
    renderWithProviders(<TopRepositoriesTab />)

    const nextButton = await screen.findByText(/next/i)
    await user.click(nextButton)
  
    const prevButton = await screen.findByText(/previous/i)

    expect(prevButton).toBeEnabled()
  })
})

