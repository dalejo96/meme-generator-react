import * as React from "react";
import { useTheme } from "./ThemeContext";
import withCounter from "./WithCounter";

interface ButtonProps {
  count: number;
  incrementCount: () => void;
}

const Button = ({ count, incrementCount }: ButtonProps): React.ReactElement => {
  const { theme } = useTheme();

  const themeStyle = {
    backgroundColor: theme === "dark" ? "#C3C3C3" : "#6441a5",
    color: theme === "dark" ? "#000000" : "#FFFFFF",
  };

  return (
    <button onClick={incrementCount} style={themeStyle} type="submit">
      Generate {count} times
    </button>
  );
};

export default withCounter(Button);
