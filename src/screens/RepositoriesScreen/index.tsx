import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../domains/hooks';
import { fetchFavouriteRepos } from '../../domains/repository/repositoryThunks';
import TopRepositoriesTab from './components/TopRepositoriesTab'
import FavouriteRepositoriesTab from './components/FavouriteRepositoriesTab'
import { Heading3 } from '../../components/Typography'

const RepositoriesScreen = () => {
  const dispatch = useAppDispatch();
  const [showFavourites, setShowFavourites] = useState(false)

  useEffect(() => {
    dispatch(fetchFavouriteRepos())
  }, [dispatch])

  return (
    <>
      <Navigation>
        <Heading3
          cursor="pointer"
          primary={!showFavourites}
          underline={!showFavourites}
          onClick={() => setShowFavourites(false)}
        >
          Leaderboard
        </Heading3>
        <Heading3
          cursor="pointer"
          primary={showFavourites}
          underline={showFavourites}
          onClick={() => setShowFavourites(true)}
        >
          Favourites
        </Heading3>
      </Navigation>
      <ContentWrapper>
        { showFavourites ?
          <FavouriteRepositoriesTab /> :
          <TopRepositoriesTab />
        }
      </ContentWrapper>
    </>
  )
}

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`

const ContentWrapper = styled.section`
  width: 700px;
  max-width: 65vh;
`

export default RepositoriesScreen