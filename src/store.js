import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'; // Adjust the path as necessary
import resultReducer from './features/resultSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    resultDetail: resultReducer
  },
})