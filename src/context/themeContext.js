import { createContext } from "react";
import { blackLogo, iconBlack, iconWhite, whiteLogo } from "../static";

// can only take 'light' or 'dark' as value
// when updating themes using setMode use the exported constant theme variables
export const LIGHT_THEME_MODE = "light";
export const DARK_THEME_MODE = "dark";

// todo: set default theme from local storage
function loadFromLocalStorage() {
  try {
    const serialisedData = localStorage.getItem("theme");
    if (serialisedData === null) return undefined;
    return JSON.parse(serialisedData);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("theme", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const DEFAULT_THEME_MODE =
  loadFromLocalStorage()?.mode || LIGHT_THEME_MODE;
console.log(DEFAULT_THEME_MODE);

const ThemeContext = createContext({
  mode: DEFAULT_THEME_MODE,
  setMode: () => {},
  logo: DEFAULT_THEME_MODE === LIGHT_THEME_MODE ? blackLogo : whiteLogo,
  icon: DEFAULT_THEME_MODE === LIGHT_THEME_MODE ? iconBlack : iconWhite,
  themeModes: {
    LIGHT_THEME_MODE,
    DARK_THEME_MODE,
    DEFAULT_THEME_MODE,
  },
});

export default ThemeContext;
