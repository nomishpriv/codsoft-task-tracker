import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoslice.js";
import alertSlice from "./slices/alertSlice.js";
import themeSlice from "./slices/themeslice.js";

export default configureStore({
  reducer: {
    todos: todoSlice,
    alerts: alertSlice,
    themes: themeSlice,
  },
});
