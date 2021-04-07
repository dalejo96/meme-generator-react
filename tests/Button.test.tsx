import { render, screen, waitFor } from "@testing-library/react";
import Button from "../src/components/Button";
import userEvent from "@testing-library/user-event";

function getCountText(count: number): string {
  return `Generate ${count} times`;
}

describe("when Button component is renderer", () => {
  describe("when the button is clicked one time", () => {
    it("then text changes one time", async () => {
      render(<Button />);
      await waitFor(() => {
        screen.getByText(getCountText(0));
      });
      userEvent.click(screen.getByText(getCountText(0)));
      await waitFor(() => {
        screen.getByText(getCountText(1));
      });
    });
  });
  describe("when the button is clicked two times", () => {
    it("then text changes two times", async () => {
      render(<Button />);
      await waitFor(() => {
        screen.getByText(getCountText(0));
      });
      userEvent.click(screen.getByText(getCountText(0)));
      await waitFor(() => {
        screen.getByText(getCountText(1));
      });
      userEvent.click(screen.getByText(getCountText(1)));
      await waitFor(() => {
        screen.getByText(getCountText(2));
      });
    });
  });
});
