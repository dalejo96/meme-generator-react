import React from "react";
import { useTheme } from "./ThemeContext";
import withCounter from "./WithCounter";

interface InformationProps {
  count: number;
  incrementCount: () => void;
}

const Information = ({ count, incrementCount }: InformationProps) => {
  const { theme } = useTheme();

  const themeStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#CCC",
    color: theme === "dark" ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  {
    if (count < 10) {
      return (
        <div onMouseOver={incrementCount} style={themeStyles}>
          Welcome to the meme generator! With {theme} theme! Hovered {count}{" "}
          times!
        </div>
      );
    } else {
      throw new Error("Too much hover !!");
    }
  }
};

//export default Information;
export default withCounter(Information);
