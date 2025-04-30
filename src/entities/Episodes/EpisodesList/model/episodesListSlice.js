import { createSlice } from '@reduxjs/toolkit'

export const episodesListSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodesList: [],
    currentEpisode: {},
    host: ''
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
    setEpisodesList: (state, action) => {
      state.episodesList = action.payload
    },
    setHost: (state, action) => {
      state.host = action.payload
    },
    setCurrentEpisode: (state, action) => {
      state.currentEpisode = action.payload
    }
  }
})

export const { actions: episodesListActions } = episodesListSlice
export const { reducer: episodesListReducer } = episodesListSlice
