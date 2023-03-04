import { createSelector } from '@reduxjs/toolkit'
import { IRepositoryStore, REPOSITORY_STORE_NAME } from './repositorySlice';

export const repositoriesSelector = (state: any): any =>
  state[REPOSITORY_STORE_NAME]

export const getRepositories = createSelector(
  repositoriesSelector,
  (store: IRepositoryStore) => store.repositories.entities,
)

export const getCurrentPage = createSelector(
  repositoriesSelector,
  (store: IRepositoryStore) => store.repositories.currentPage,
)

export const getFavouriteRepos = createSelector(
  repositoriesSelector,
  (store: IRepositoryStore) => store.favourites.entities,
)

export const getFavouritesIds = createSelector(
  repositoriesSelector,
  (store: IRepositoryStore) => store.favourites.ids,
)
