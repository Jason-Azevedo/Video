import { createSlice } from "@reduxjs/toolkit";

import localstorageHelper from "../../utils/localstorageHelper";

const LS_KEY = "darkmode-theme";

interface IDarkModeState {
  isDarkMode: Boolean;
}

const initialState = { isDarkMode: false } as IDarkModeState;

// Fetch old darkmode theme from localstorage
const { item, error } = localstorageHelper.load(LS_KEY);
if (error) {
  console.error(
    `Failed to load previous darkmode settings from localstorage\n ${error}`
  );
}

// isDarkMode is defined and it is true
if (item) {
  initialState.isDarkMode = item;
}

export const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;

      // Save changes to localstorage
      const { error } = localstorageHelper.save(LS_KEY, state.isDarkMode);
      if (error) {
        console.error(
          `Failed to save new darkmode settings to localstorage ${error}`
        );
      }
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
