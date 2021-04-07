import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { callApi } from "../../services/DataImages";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Information from "./Information";
import { MemeGenerator } from "./MemeGenerator";
import { Nav } from "./Nav";
import { ErrorBoundary as ErrorBoundaryLibrary } from "react-error-boundary";
import { Error, myErrorHandler } from "./Error";

export const RandomMeme = (props: RouteComponentProps): React.ReactElement => {
  return (
    <>
      <Nav />
      <Header />
      {/* <ErrorBoundary>
        <Information />
      </ErrorBoundary> */}
      <ErrorBoundaryLibrary FallbackComponent={Error} onError={myErrorHandler}>
        <Information />
      </ErrorBoundaryLibrary>
      <MemeGenerator apiCall={callApi} />
      <Footer />
    </>
  );
};
