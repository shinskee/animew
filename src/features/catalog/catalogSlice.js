import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortValue: 'FRESH_AT_DESC',
  sortText: 'Обновлены недавно',
  page: 1,
  genres: []
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSort: (state, action) => {
        state.sortValue = action.payload.value,
        state.sortText = action.payload.text
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    setGenres: (state, action) => {
      if (state.genres.length === 0) {
        state.genres.push(action.payload)
      } else if (state.genres.find(e => e.id === action.payload.id)) {
        state.genres = state.genres.filter(e => e.id !== action.payload.id)
      } else {
        state.genres.push(action.payload)
      }
    },
    resetCatalog: (state) => {(
      state.genres = [],
      state.sortValue = 'FRESH_AT_DESC',
      state.sortText = 'Обновлены недавно'
    )},
  },
})

// Action creators are generated for each case reducer function
export const { setSort, setPage, setGenres, resetCatalog } = catalogSlice.actions

export default catalogSlice.reducer