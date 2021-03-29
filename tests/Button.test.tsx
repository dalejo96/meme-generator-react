import { render, screen, waitFor } from "@testing-library/react";
import Button from "../src/components/Button";
import userEvent from "@testing-library/user-event";
import withCounter from "../src/components/WithCounter";

describe("when Button component is renderer", () => {
  it("default text is displayed", async () => {
    const { getByText } = render({ Button });
    await waitFor(() => {
      getByText("Generate 0 times");
    });
  });
});

describe("when the button is clicked one time", () => {
  it("then text changes one time", async () => {
    render(<Button />);
    await waitFor(() => {
      screen.getByText("Generate 0 times");
    });
    userEvent.click(screen.getByText("Generate 0 times"));
    await waitFor(() => {
      screen.getByText("Generate 1 times");
    });
  });
});

describe("when the button is clicked two times", () => {
  it("then text changes two times", async () => {
    render(<Button />);
    await waitFor(() => {
      screen.getByText("Generate 0 times");
    });
    userEvent.click(screen.getByText("Generate 0 times"));
    await waitFor(() => {
      screen.getByText("Generate 1 times");
    });
    userEvent.click(screen.getByText("Generate 1 times"));
    await waitFor(() => {
      screen.getByText("Generate 2 times");
    });
  });
});
