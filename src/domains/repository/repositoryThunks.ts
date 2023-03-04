import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppThunk } from '../rootStore'
import repositoriesApi, { IFetchRepositoriesRequest } from './repositoryApi'
import { fetchFavourites, addFavourite, removeFavourite } from './repositorySlice';
import { IRepository } from './repositoryTypes';

export const fetchRepositories = createAsyncThunk(
  'repositories/fetchRepositories',
  async (req: IFetchRepositoriesRequest, thunkApi) => {
    try {
      const { data: { items } } = await repositoriesApi.fetchRepositories(req)

      const mappedItems = items.map((item): IRepository => (
        {
          id: item.id,
          description: item.description,
          name: item.name,
          htmlUrl: item.html_url,
          stars: item.stargazers_count
        }
      ))

      return {
        items: mappedItems,
        currentPage: req.page ?? 1
      }
    } catch (error: any) {
      return thunkApi.rejectWithValue(error?.response?.data?.message)
    }
  },
)

// returns a JSON array of favourite repositories from local storage
const getFavouritesFromLocal = () => {
  const favourites = localStorage.getItem('favouriteRepositories')
  return favourites ? JSON.parse(favourites) : undefined
}

export const fetchFavouriteRepos = (): AppThunk => (dispatch) => {
  try {
    const favourites = getFavouritesFromLocal();

    if (favourites) dispatch(fetchFavourites(favourites));
  } catch (error: any) {
    console.log(error);
  }
}

export const addFavouriteRepo = (repository: IRepository): AppThunk => (dispatch) => {
  try {
    const favourites = getFavouritesFromLocal() ?? []
    favourites.push(repository)
    localStorage.setItem('favouriteRepositories', JSON.stringify(favourites))

    dispatch(addFavourite(repository));
  } catch (error: any) {
    console.log(error);
  }
}

export const removeFavouriteRepo = (repository: IRepository): AppThunk => (dispatch) => {
  try {
    const favourites = getFavouritesFromLocal() ?? []
    localStorage.setItem(
      'favouriteRepositories',
      JSON.stringify(favourites.filter((item: IRepository) => item.id !== repository.id))
    )

    dispatch(removeFavourite(repository));
  } catch (error: any) {
    console.log(error);
  }
}

export default {
  fetchRepositories,
  fetchFavouriteRepos,
  addFavouriteRepo,
  removeFavouriteRepo
}
