import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  isAuth: false,
  isAuthLoading: true,
  state: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setAuth: (state) => {
        state.isAuth = true,
        state.isAuthLoading = false
    },
    setLogout: (state) => {
        state.isAuth = false,
        state.isAuthLoading = false
    },
    setState: (state, action) => {
        state.state = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setLogout, setState } = authSlice.actions

export default authSlice.reducer