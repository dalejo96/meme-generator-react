import { render, screen, waitFor } from "@testing-library/react";
import Button from "../src/components/Button";
import userEvent from "@testing-library/user-event";
import withCounter from "../src/components/WithCounter";

describe("when Button component is renderer", () => {
  it("default text is displayed", async () => {
    let count = 0;
    const incrementCount = () => {
      count = count + 1;
    };
    const { getByText } = render(
      <Button count={count} incrementCount={incrementCount} />
    );
    await waitFor(() => {
      getByText("Generate 0 times");
    });
  });
});

describe("when the button is clicked one time", () => {
  it("then text changes one time", async () => {
    let count = 0;
    const incrementCount = () => {
      count = count + 1;
    };
    render(<Button count={count} incrementCount={incrementCount} />);
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
    let count = 0;
    const incrementCount = () => {
      count = count + 1;
    };
    render(<Button count={count} incrementCount={incrementCount} />);
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
