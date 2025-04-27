import { createSlice } from '@reduxjs/toolkit'

export const favoritesListSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesList: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favoritesList.push(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favoritesList))
    },
    deleteFromFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter((item) => item.id !== action.payload.id)
      localStorage.setItem('favorites', JSON.stringify(state.favoritesList))
    },
    initFavoritesList: (state) => {
      const favorites = JSON.parse(localStorage.getItem('favorites'))
      state.favoritesList = favorites || []
    },
  }
})

export const { actions: favoritesListActions } = favoritesListSlice
export const { reducer: favoritesListReducer } = favoritesListSlice
