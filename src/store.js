import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import alertSlice from './slices/alertSlice'
import themeSlice from './slices/themeSlice'

export default configureStore({
  reducer: {
    todos: todoSlice,
    alerts: alertSlice,
    themes: themeSlice,
  },
})
