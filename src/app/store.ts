import { configureStore, combineReducers } from '@reduxjs/toolkit';
import countryReducer from './features/counterslice'; 

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  country: countryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export { rootReducer };
