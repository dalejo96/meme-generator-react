import * as React from "react";
import { FallbackProps } from "react-error-boundary";

export const Error: React.ComponentType<FallbackProps> = (
  error: any,
  resetErrorBoundary: void
) => {
  return (
    <>
      <h2>App Crashed</h2>
      <p>Something went wrong!!!</p>
      <p>{error.message}</p>
    </>
  );
};

export const myErrorHandler = (
  error: Error,
  info: { componentStack: string }
) => {
  console.log(error);
};
