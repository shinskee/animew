import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorites: [],
  isChanging: false,
  isFavoritesSet: false,
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
        state.favorites = action.payload,
        state.isFavoritesSet = true, 
        state.isChanging = !state.isChanging
    },
    resetFavorite: (state) => {
        state.favorites = [],
        state.isChanging = !state.isChanging
    },
    setAddFavorite: (state, action) => {
        state.favorites = [action.payload, ...state.favorites],
        state.isChanging = !state.isChanging
    },
    setDeleteFavorite: (state, action) => {
        state.favorites = state.favorites.filter(e => e.id !== action.payload),
        state.isChanging = !state.isChanging
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAddFavorite, resetFavorite, setDeleteFavorite, setFavorites } = favoriteSlice.actions

export default favoriteSlice.reducer