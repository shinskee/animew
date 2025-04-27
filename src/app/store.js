import { configureStore } from '@reduxjs/toolkit'
import { apiInstance } from '../shared/api/base'
import { createReducerManager } from './reducerManager'
import { api } from '../shared/api/api'
import { favoritesListReducer } from '../entities/FavoritesList/model/favoritesListSlice'


const rootReducers = {
  favorites: favoritesListReducer,
  [api.reducerPath]: api.reducer
}

const reducerManager = createReducerManager(rootReducers)

export const store = configureStore({
  reducer: reducerManager.reduce,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        api: apiInstance
      }
    }
  }).concat(api.middleware)
})

store.reducerManager = reducerManager