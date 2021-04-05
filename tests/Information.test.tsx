import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Information from "../src/components/Information";
import { Nav } from "../src/components/Nav";
import { ThemeProvider } from "../src/components/ThemeContext";

describe("when Information component is rendered", () => {
  it("default dark text is displayed", async () => {
    const { getByText } = render(<Information />);
    await waitFor(() => {
      getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      );
    });
  });

  it("then text changes one time when hover action is performed", async () => {
    render(<Information />);
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      );
    });
    userEvent.hover(
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      )
    );
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 1 times!"
      );
    });
  });

  it("then text changes two time when hover action is performed twice", async () => {
    render(<Information />);
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      );
    });
    userEvent.hover(
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      )
    );
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 1 times!"
      );
    });
    userEvent.hover(
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 1 times!"
      )
    );
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 2 times!"
      );
    });
  });
});

describe("when Information component is rendered with context", () => {
  it("the text changes from dark to light when switch is clicked", async () => {
    render(
      <ThemeProvider>
        <Nav />
        <Information />
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

  it("then text changes one time when hover action is performed and theme switch is clicked", async () => {
    render(
      <ThemeProvider>
        <Nav />
        <Information />
      </ThemeProvider>
    );
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      );
    });
    userEvent.hover(
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 0 times!"
      )
    );
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With dark theme! Hovered 1 times!"
      );
    });
    userEvent.click(screen.getByText("Dark"));
    await waitFor(() => {
      screen.getByText(
        "Welcome to the meme generator! With light theme! Hovered 1 times!"
      );
    });
  });
});
