import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import localstorageHelper from "../../utils/localstorageHelper";

const LS_KEY = "color-theme";

export enum ColorThemes {
  blue = "blue",
  orange = "orange",
  purple = "purple",
}

const initialState = {
  color: ColorThemes.blue,
};

// Fetch old color scheme from localstorage
const oldTheme = localstorageHelper.load(LS_KEY);
if (oldTheme.error) {
  console.error(
    `Failed to load color theme from localstorage\n${oldTheme.error}`
  );
} else if (oldTheme.item) {
  initialState.color = ColorThemes[oldTheme.item as ColorThemes];
}

export const colorThemeSlice = createSlice({
  name: "colortheme",
  initialState,
  reducers: {
    setColorTheme: (state, action: PayloadAction<ColorThemes>) => {
      state.color = action.payload;

      // Save changes
      const { error } = localstorageHelper.save(LS_KEY, action.payload);
      if (error)
        console.error(`Failed to save color theme to localstorage\n${error}`);
    },
  },
});

export const { setColorTheme } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
