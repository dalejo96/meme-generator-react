import * as React from "react";
import { FallbackProps } from "react-error-boundary";

export const Error: React.ComponentType<FallbackProps> = (error: any, {}) => {
  return (
    <>
      <h2>App Crashed</h2>
      <p>Something went wrong!!!</p>
      <p>{error.message}</p>
    </>
  );
};

export const myErrorHandler = (error: Error, {}) => {
  console.log(error);
};
