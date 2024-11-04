import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchText: '',
  inputText: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
        state.searchText = action.payload
    },
    resetInput: (state) => {
      state.inputText = ''
    },
    setInputText: (state, action) => {
      state.inputText = action.payload
  },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchText, resetInput, setInputText } = searchSlice.actions

export default searchSlice.reducer