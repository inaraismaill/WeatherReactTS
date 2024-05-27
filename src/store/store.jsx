import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './features/counterslice'

export const store = configureStore({
  reducer: {
    countryID: countrySlice,
  },
})

