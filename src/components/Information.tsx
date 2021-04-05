import React from "react";
import { useTheme } from "./ThemeContext";
import withCounter, { InjectedCounterProps } from "./WithCounter";

interface InformationProps extends InjectedCounterProps {}

const Information: React.FC<InformationProps> = (props) => {
  //const Information = ({ count, incrementCount }: InformationProps) => {
  const { theme } = useTheme();

  const themeStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#CCC",
    color: theme === "dark" ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  {
    if (props?.count && props.count >= 10) {
      throw new Error("Too much hover !!");
    }
  }
  return (
    <div onMouseOver={props.incrementCount} style={themeStyles}>
      Welcome to the meme generator! With {theme} theme! Hovered {props.count}{" "}
      times!
    </div>
  );
};

//export default Information;
export default withCounter(Information);
