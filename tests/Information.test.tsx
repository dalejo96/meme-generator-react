import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Information from "../src/components/Information";
import { Nav } from "../src/components/Nav";
import { ThemeProvider } from "../src/components/ThemeContext";

function getHoverAndThemeText(theme: string, count: number): string {
  return `Welcome to the meme generator! With ${theme} theme! Hovered ${count} times!`;
}

describe("when Information component is rendered", () => {
  it("then text changes one time when hover action is performed", async () => {
    render(<Information />);
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("dark", 0));
    });
    userEvent.hover(screen.getByText(getHoverAndThemeText("dark", 0)));
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("dark", 1));
    });
  });

  it("then text changes two time when hover action is performed twice", async () => {
    render(<Information />);
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("dark", 0));
    });
    userEvent.hover(screen.getByText(getHoverAndThemeText("dark", 0)));
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("dark", 1));
    });
    userEvent.hover(screen.getByText(getHoverAndThemeText("dark", 1)));
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("dark", 2));
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
      screen.getByText(getHoverAndThemeText("dark", 0));
    });
    userEvent.click(screen.getByText("Dark"));
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("light", 0));
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
      screen.getByText(getHoverAndThemeText("dark", 0));
    });
    userEvent.hover(screen.getByText(getHoverAndThemeText("dark", 0)));
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("dark", 1));
    });
    userEvent.click(screen.getByText("Dark"));
    await waitFor(() => {
      screen.getByText(getHoverAndThemeText("light", 1));
    });
  });
});
