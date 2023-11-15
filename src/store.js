import { configureStore } from '@reduxjs/toolkit'
import todoslice from './slices/todoslice'
import alertSlice from './slices/alertSlice'
import themeSlice from './slices/themeslice'

export default configureStore({
  reducer: {
    todos: todoslice,
    alerts: alertSlice,
    themes: themeSlice,
  },
})
