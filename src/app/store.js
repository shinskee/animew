import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../sevices/authApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../features/auth/authSlice'
import { animeApi } from '../sevices/animeApi'
import favoriteReducer from '../features/favorites/favoriteSlice'
import searchReducer from '../features/search/searchSlice'
import catalogReducer from '../features/catalog/catalogSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoriteReducer,
    search: searchReducer,
    catalog: catalogReducer,
    [authApi.reducerPath]: authApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([authApi.middleware, animeApi.middleware]),
})

setupListeners(store.dispatch)