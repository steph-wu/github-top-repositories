import dayjs from 'dayjs'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../../../domains/hooks"
import { fetchRepositories } from '../../../domains/repository/repositoryThunks'
import { getRepositories, getCurrentPage } from '../../../domains/repository/repositorySelectors'
import RepositoryItem from './RepositoryItem'
import Button from '../../../components/Button'
import { Heading1, Heading2, Heading3 } from '../../../components/Typography'

const TopRepositoriesTab = () => {
  const dispatch = useAppDispatch();
  const repositories = useAppSelector(getRepositories);
  const currentPage = useAppSelector(getCurrentPage);
  
  useEffect(() => {
    dispatch(fetchRepositories({
      createdAfter: dayjs().subtract(1, 'week').toDate()
    }))
  }, [dispatch])

  const fetchPage = (page: number) => {
    dispatch(fetchRepositories({
      createdAfter: dayjs().subtract(1, 'week').toDate(),
      page
    }))
  }

  if (repositories.length === 0) return null

  return (
    <>
      <Header>
        <Heading1>Top Github Repositories</Heading1>
        <Heading2>Created This Week</Heading2>
      </Header>
      <ListWrapper>
        <ColumnTitleWrapper>
          <Heading3>NAME</Heading3>
          <Heading3>STARS</Heading3>
        </ColumnTitleWrapper>
        {
          repositories.map((item) => {
            return <RepositoryItem key={item.id} repository={item} />
          })
        }
      </ListWrapper>
      <ButtonWrapper>
        <Button label="Previous" onClick={() => fetchPage(currentPage - 1)} isDisabled={currentPage < 2}/>
        <Button label="Next" onClick={() => fetchPage(currentPage + 1)}/>
      </ButtonWrapper>
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
  height: 800px;
  max-height: 55vh;
  overflow: auto;
  padding: 16px;
  margin: 16px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default TopRepositoriesTab