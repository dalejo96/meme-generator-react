import React from "react";
import { callApi } from "../../services/DataImages";
import { Footer } from "./Footer";
import Information from "./Information";
import { Header } from "./Header";
import { MemeGenerator } from "./MemeGenerator";
import { ThemeProvider } from "./ThemeContext";
import ErrorBoundary from "./ErrorBoundary";

export const App1 = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <Header />
      <ErrorBoundary>{Information}</ErrorBoundary>
      <MemeGenerator apiCall={callApi} />
      <Footer />
    </ThemeProvider>
  );
};
