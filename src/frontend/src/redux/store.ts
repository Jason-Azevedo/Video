import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "../features/theme/darkModeSlice";
import colorThemeReducer from "../features/theme/colorThemeSlice";

const store = configureStore({
  reducer: {
    darkmode: darkModeReducer,
    colorTheme: colorThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
