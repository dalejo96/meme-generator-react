import { render, waitFor } from "@testing-library/react";
import { ErrorBoundary as ErrorBoundaryLibrary } from "react-error-boundary";
import {
  Error as ErrorComponent,
  myErrorHandler,
} from "../src/components/Error";
import ErrorBoundary from "../src/components/ErrorBoundary";

describe("when library error boundary is rendered", () => {
  it("shows the fallback UI when there is an error", async () => {
    const Throws = () => {
      throw new Error("Oh no!");
    };
    const { getByText, unmount } = render(
      <ErrorBoundaryLibrary FallbackComponent={ErrorComponent}>
        <Throws />
      </ErrorBoundaryLibrary>
    );
    await waitFor(() => {
      getByText("Something went wrong!!!");
    });
  });
});

describe("when custom error boundary is rendered", () => {
  it("shows the fallback UI when there is an error", async () => {
    const Throws = () => {
      throw new Error("Oh no!");
    };
    const { getByText, unmount } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>
    );
    await waitFor(() => {
      getByText("Something has went horribly wrong.");
      getByText("Error: Oh no!");
    });
  });
});
