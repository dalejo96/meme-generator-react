import * as React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const Footer = styled.footer<{ isDark: boolean }>`
    background: ${(props) => (props.isDark ? "#A3546E" : "#DB7093")};
    border-radious: 15px;
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  `;

  const Image = styled.img`
    height: 80%;
    margin-left: 10%;
    margin-top: 10px;
  `;

  const TitleText = styled.p<{ isDark: boolean }>`
    font-family: VT323, monospace;
    color: ${(props) => (props.isDark ? "#C3C3C3" : "whitesmoke")};
    font-size: 50px;
    margin-left: 60px;
    float: left;
    margin-top: 0;
    margin-bottom: 1rem;
  `;

  return (
    <Footer isDark={theme === "dark"}>
      <Image
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <TitleText isDark={theme === "dark"}> Meme Generator</TitleText>
    </Footer>
  );
};
