import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { Nav } from "./Nav";

export const About = (props: RouteComponentProps): React.ReactElement => {
  return (
    <>
      <Nav />
      This is a meme generator app!
    </>
  );
};
