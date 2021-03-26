import * as React from "react";
import { Router } from "@reach/router";
import { Home } from "./Home";
import { RandomMeme } from "./RandomMeme";
import { About } from "./About";
import { ThemeProvider } from "./ThemeContext";
import { CustomMeme } from "./CustomMeme";

export const App2 = () => {
  return (
    <ThemeProvider>
      <Router>
        <Home path="/" />
        <RandomMeme path="/random-meme" />
        <About path="/about" />
        <CustomMeme path="/custom-meme" />
      </Router>
    </ThemeProvider>
  );
};
