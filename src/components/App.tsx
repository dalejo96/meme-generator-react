import * as React from "react";
import { Router } from "@reach/router";
import { Home } from "./Home";
import { RandomMeme } from "./RandomMeme";
import { About } from "./About";
import { ThemeProvider } from "./ThemeContext";
import { CustomMeme } from "./CustomMeme";
import { callApi } from "../../services/DataImages";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Home path="/" apiCall={callApi} />
        <RandomMeme path="/random-meme" />
        <About path="/about" />
        <CustomMeme path="/custom-meme" />
      </Router>
    </ThemeProvider>
  );
};
