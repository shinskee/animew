import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortValue: 'FRESH_AT_DESC',
  sortText: 'Обновлены недавно',
  page: 1,
  genres: [],
  type: '',
  status: '',
  season: '',
  sound: '',
  age: ''
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
    setPageNext: (state) => {
      state.page = state.page + 1
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
    setType: (state, action) => {
      if (state.type === action.payload) {
        state.type = ''
      } else {
        state.type = action.payload
      }
    },
    setStatus: (state, action) => {
      if (state.status === action.payload) {
        state.status = ''
      } else {        
        state.status = action.payload
      }
    },
    setSeasons: (state, action) => {
      if (state.season === action.payload) {
        state.season = ''
      } else {        
        state.season = action.payload
      }
    },
    setAges: (state, action) => {
      if (state.age === action.payload) {
        state.age = ''
      } else {        
        state.age = action.payload
      }
    },
    setSounds: (state, action) => {
      if (state.sound === action.payload) {
        state.sound = ''
      } else {        
        state.sound = action.payload
      }
    },
    resetCatalog: (state) => {(
      state.genres = [],
      state.sortValue = 'FRESH_AT_DESC',
      state.sortText = 'Обновлены недавно',
      state.type = '',
      state.status = '',
      state.season = '',
      state.age = '',
      state.sound = '',
      state.page = 1
    )},
  },
})

// Action creators are generated for each case reducer function
export const { setSort, setPage, setGenres, resetCatalog, setType, 
  setStatus, setSeasons, setAges, setSounds, setPageNext } = catalogSlice.actions

export default catalogSlice.reducer