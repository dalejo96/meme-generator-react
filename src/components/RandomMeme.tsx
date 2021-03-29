import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { callApi } from "../../services/DataImages";
import ErrorBoundary from "./ErrorBoundary";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Information from "./Information";
import { MemeGenerator } from "./MemeGenerator";
import { Nav } from "./Nav";

export const RandomMeme = (props: RouteComponentProps): React.ReactElement => {
  return (
    <>
      <Nav />
      <Header />
      <ErrorBoundary>{Information}</ErrorBoundary>
      <MemeGenerator apiCall={callApi} />
      <Footer />
    </>
  );
};
