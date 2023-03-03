import styled from 'styled-components'
import { GlobalStyles } from './styles/theme'
import RepositoriesScreen from './screens/RepositoriesScreen/index';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <RepositoriesScreen />
    </AppContainer>
  )
}

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`

export default App