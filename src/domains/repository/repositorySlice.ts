import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRepositories } from "./repositoryThunks";
import { IRepository } from './repositoryTypes';

export interface IRepositoryStore {
  topRepositories: {
    entities: IRepository[]
    currentPage: number
    error: boolean
  }
  favourites: {
    entities: IRepository[]
    ids: number[]
  }
}

const initialState: IRepositoryStore = {
  topRepositories: {
    entities: [],
    currentPage: 0,
    error: false
  },
  favourites: {
    entities: [],
    ids: [],
  },
}

export const REPOSITORY_STORE_NAME = 'repositories';

export const repositoriesSlice = createSlice({
  name: REPOSITORY_STORE_NAME,
  initialState,
  reducers: {
    fetchFavourites: (state, action: PayloadAction<IRepository[]>) => {
      const { favourites }  = state;

      favourites.entities = action.payload;
      const ids = action.payload.reduce((ids: number[], repository): number[] => {
        ids.push(repository.id)
        return ids
      }, [])
      favourites.ids = ids
    },
    addFavourite: (state, action: PayloadAction<IRepository>) => {
      const { favourites }  = state;

      favourites.entities = [...favourites.entities, action.payload]
      favourites.ids = [...favourites.ids, action.payload.id]
    },
    removeFavourite: (state, action: PayloadAction<IRepository>) => {
      const { favourites }  = state;

      favourites.entities = favourites.entities.filter((repository) => (
        repository.id !== action.payload.id
      ))
      favourites.ids = favourites.ids.filter(id => id !== action.payload.id)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        if (action.payload?.items && action.payload?.currentPage) {
          state.topRepositories.entities = [...action.payload.items]
          state.topRepositories.currentPage = action.payload.currentPage
          state.topRepositories.error = false
        }
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.topRepositories.error = true
    });
  },
});

export const { addFavourite, removeFavourite, fetchFavourites } = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
