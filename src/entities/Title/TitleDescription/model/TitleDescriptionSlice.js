import { createSlice } from '@reduxjs/toolkit'

export const titleDescriptionSlice = createSlice({
  name: 'title',
  initialState: {
    title: {},
  },
  reducers: {
    setTitleDescription: (state, action) => {
      state.title = action.payload
    },
  }
})

export const { actions: titleDescriptionActions } = titleDescriptionSlice
export const { reducer: titleDescriptionReducer } = titleDescriptionSlice
