import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    url: null,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayPause: (state) => {
        state.playing = !state.playing 
    },
    setPlayed: (state, action) => {
        state.played = action.payload
    },
    setUrl: (state, action) => {
        state.url = action.payload
    },
    setDuration: (state, action) => {
        state.duration = action.payload 
    },
    setPlay: (state) => {
        state.playing = true
    },
    setPause: (state) => {
        state.playing = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayPause, setPlayed, setUrl, setDuration,
    setPlay, setPause
 } = playerSlice.actions

export default playerSlice.reducer