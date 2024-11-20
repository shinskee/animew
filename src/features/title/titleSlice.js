import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  episodes: [],
  isSort: false,
  episodeUrl: ''
}

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    setEpisodes: (state, action) => {
        state.episodes = [...action.payload].sort((a, b) => b.ordinal - a.ordinal)       
    },
    setSortDownEpisodes: (state) => {
        state.isSort = !state.isSort
        state.episodes = !state.isSort ? [...state.episodes].sort((a, b) => b.ordinal - a.ordinal) : [...state.episodes].sort((a, b) => a.ordinal - b.ordinal)
    },
    setEpisodeUrl: (state, action) => {
        state.episodeUrl = action.payload     
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEpisodes, setSortDownEpisodes, setEpisodeUrl } = titleSlice.actions

export default titleSlice.reducer