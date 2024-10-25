import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortValue: 'FRESH_AT_DESC',
  page: 1,
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSortValue: (state, action) => {
        state.sortValue = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
  },
  },
})

// Action creators are generated for each case reducer function
export const { setSortValue, setPage } = catalogSlice.actions

export default catalogSlice.reducer