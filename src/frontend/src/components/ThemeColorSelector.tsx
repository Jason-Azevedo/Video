import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setColorTheme, ColorThemes } from "../features/theme/colorThemeSlice";
import { RootState } from "../redux/store";

import { ReactComponent as CheckIcon } from "../assets/svg/check.svg";

export function ThemeColorSelector() {
  const color = useSelector((state: RootState) => state.colorTheme.color);
  const dispatch = useDispatch();

  const onColorSelected = (color: ColorThemes) =>
    dispatch(setColorTheme(color));

  return (
    <div className="theme-color-selector">
      <h3 className="title--14 uppercase bold dim">Theme Colors</h3>

      <div className="theme-color-selector-colors">
        {/* Render the color options */}
        {Object.values(ColorThemes).map((v, i) => (
          <div
            key={v}
            className={`theme-color-selector-color ${v}`}
            onClick={() => onColorSelected(ColorThemes[v])}
          >
            {color === v && <CheckIcon className="icon--18 white" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemeColorSelector;
