import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  weather: 19,
}

export const countrySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.weather = action.payload
    },
  },
})
export const { increment,decremnet ,incrementByAmount} = countrySlice.actions

export default countrySlice.reducer