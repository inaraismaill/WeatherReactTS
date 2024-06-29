import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CountryState {
  weather: number;
}

const initialState:CountryState = {
  weather: 19,
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    incrementByAmount: (state, action:PayloadAction<number>) => {
      state.weather = action.payload
    },
  },
})
export const { incrementByAmount} = countrySlice.actions

export default countrySlice.reducer

