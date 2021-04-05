import * as React from "react";
import { useTheme } from "./ThemeContext";
import withCounter, { InjectedCounterProps } from "./WithCounter";

interface ButtonProps extends InjectedCounterProps {}

//const Button: React.FC<ButtonProps> = ({ count, incrementCount }) => {
//const Button: React.FC<ButtonProps> = ({  count,  incrementCount,}): React.ReactElement => {
const Button: React.FC<ButtonProps> = (props) => {
  const { theme } = useTheme();

  const themeStyle = {
    backgroundColor: theme === "dark" ? "#C3C3C3" : "#6441a5",
    color: theme === "dark" ? "#000000" : "#FFFFFF",
  };

  return (
    <>
      {props.incrementCount && (
        <button onClick={props.incrementCount} style={themeStyle} type="submit">
          Generate {props.count} times
        </button>
      )}
    </>
  );
};

//export default Button;
export default withCounter(Button);
