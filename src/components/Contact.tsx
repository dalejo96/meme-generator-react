import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { ContactForm } from "./ContactForm";
import { Nav } from "./Nav";

export const Contact = (props: RouteComponentProps): React.ReactElement => {
  return (
    <>
      <Nav />
      <h1 className="panel-body">Let's contact us!</h1>
      <ContactForm />
    </>
  );
};
