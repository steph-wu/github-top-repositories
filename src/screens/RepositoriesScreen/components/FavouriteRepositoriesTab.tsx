import styled from 'styled-components'
import { useAppSelector } from "../../../domains/hooks"
import { AiOutlineStar } from 'react-icons/ai'
import { getFavouriteRepos } from '../../../domains/repository/repositorySelectors';
import { Heading1, Heading2, Heading3 } from '../../../components/Typography'
import RepositoryItem from './RepositoryItem';

const FavouriteRepositoriesTab = () => {
  const repositories = useAppSelector(getFavouriteRepos);

  const EmptyState = () => (
    <EmptyContainer>
      <AiOutlineStar size={48}/>
      <Heading2>You have no favourited repositories.</Heading2>
    </EmptyContainer>
  )

  const RepositoriesList = () => (
    <ListWrapper>
      <ColumnTitleWrapper>
        <Heading3>NAME</Heading3>
        <Heading3>STARS</Heading3>
      </ColumnTitleWrapper>
      {
        repositories.map((item) => {
          return <RepositoryItem key={item.id} repository={item} description />
        })
      }
    </ListWrapper>
  )

  return (
    <>
      <Header>
        <Heading1>Favourite</Heading1>
        <Heading2>Github Repositories</Heading2>
      </Header>
      {repositories.length > 0 ?
        <RepositoriesList /> :
        <EmptyState />
      }
    </>
  )
}

const Header = styled.header`
  text-align: center;
`

const ColumnTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const ListWrapper = styled.div`
  height: 420px;
  max-height: 80vh;
  overflow-y: scroll;
  padding: 16px;
  margin: 16px 0;
`

const EmptyContainer = styled.div`
  margin: 40px 0;
  text-align: center;
`

export default FavouriteRepositoriesTab;