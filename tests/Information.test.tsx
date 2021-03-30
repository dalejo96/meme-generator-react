import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Information from "../src/components/Information";
import { Nav } from "../src/components/Nav";
import { ThemeProvider } from "../src/components/ThemeContext";

describe("when Information component is rendered", () => {
  it("default dark text is displayed", async () => {
    const { getByText } = render(
      <Information count={0} incrementCount={() => undefined} />
    );
    await waitFor(() => {
      getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      );
    });
  });
});

describe("when Information component is rendered with nav", () => {
  it("the text changes from dark to light when switch is clicked", async () => {
    render(
      <ThemeProvider>
        <Nav />
        <Information count={0} incrementCount={() => undefined} />
      </ThemeProvider>
    );
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      );
    });
    userEvent.click(screen.getByText("Dark"));
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With light theme! Hovered 0 times!"
      );
    });
  });
});
