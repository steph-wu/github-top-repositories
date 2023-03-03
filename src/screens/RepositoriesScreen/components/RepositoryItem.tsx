import styled from 'styled-components'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { IRepository } from '../../../domains/repository/repositoryTypes'
import { addFavouriteRepo, removeFavouriteRepo } from '../../../domains/repository/repositoryThunks'
import { Heading3, Link, Paragraph } from '../../../components/Typography'
import { theme } from '../../../styles/theme'
import { useAppDispatch, useAppSelector } from '../../../domains/hooks'
import { getFavouritesIds } from '../../../domains/repository/repositorySelectors'

const RepositoryItem = ({
  repository,
  description = false
 }: {
  repository: IRepository
  description?: boolean
 }) => {
  const dispatch = useAppDispatch()
  const favourites = useAppSelector(getFavouritesIds)

  const isFavourited = favourites.includes(repository.id)

  return (
    <div data-testid="repositoryItem">
      <ItemWrapper>
        <TitleWrapper>
          <StarWrapper>
            { isFavourited ?
              <AiFillStar data-testid="unfavouriteRepo" onClick={() => dispatch(removeFavouriteRepo(repository))} /> :
              <AiOutlineStar data-testid="favouriteRepo" onClick={() => dispatch(addFavouriteRepo(repository))}/>
            }
          </StarWrapper>
          <Heading3 data-testid="repoName"><Link href={repository.htmlUrl} target="_blank">{repository.name}</Link></Heading3>
        </TitleWrapper>

        <Paragraph bold data-testid="starCount">{repository.stars}</Paragraph>
      </ItemWrapper>
      {description &&
        <DescriptionWrapper>
          <Paragraph>{repository.description}</Paragraph>
        </DescriptionWrapper>
      }
    </div>
  )
}

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 6px 0;
  border-bottom: 1px solid ${theme.grey};
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

const StarWrapper = styled.div`
  flex: 1;
  cursor: pointer;
`

const DescriptionWrapper = styled.div`
  padding: 8px 24px 32px;
`

export default RepositoryItem;