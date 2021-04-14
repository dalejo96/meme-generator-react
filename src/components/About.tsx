import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { ContactForm } from "./ContactForm";
import { Nav } from "./Nav";
import UploadImages from "./UploadImages";

export const About = (props: RouteComponentProps): React.ReactElement => {
  return (
    <>
      <Nav />
      This is a meme generator app!
      {/* <UploadImages /> */}
      {/* <ContactForm /> */}
    </>
  );
};
