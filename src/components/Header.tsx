import * as React from "react";
import { useTheme } from "./ThemeContext";
//import BootstrapSwitchButton from "bootstrap-switch-button-react";

export const Header: React.FC = () => {
  const { theme } = useTheme();

  const themeStyles = {
    backgroundColor: theme === "dark" ? "#461E65" : "#6441a5",
  };

  const foreColorStyle = {
    color: theme === "dark" ? "#CECECE" : "#FFFFFF",
  };

  return (
    <header style={themeStyles}>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <p style={foreColorStyle}>Meme Generator</p>
      {/* <BootstrapSwitchButton
        checked={false}
        size="lg"
        onlabel="Light"
        onstyle={"light"}
        offlabel="Dark"
        offstyle={"dark"}
        onChange={toggle}
      /> */}
    </header>
  );
};
