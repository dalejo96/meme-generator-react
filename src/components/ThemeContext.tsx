import * as React from "react";
import { useContext, useState } from "react";

interface ThemeCtx {
  theme: "dark" | "light";
  toggle: () => void;
}

export const ThemeContext = React.createContext<ThemeCtx>({
  theme: "dark",
  toggle: () => undefined,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeCtx["theme"]>("dark");

  const toggle = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeContext: ThemeCtx = {
    theme,
    toggle,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};
