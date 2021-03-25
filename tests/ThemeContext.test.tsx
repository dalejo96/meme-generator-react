import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeContext, ThemeProvider } from "../src/components/ThemeContext";
import userEvent from "@testing-library/user-event";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import Information from "../src/components/Information";

describe("<ThemeProvider />", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );
  });

  describe("when page is initialized", () => {
    it("then shows the dark theme by default", () => {
      expect(screen.getByText("Dark")).toBeTruthy();
    });
  });

  describe("when the toggle theme button is clicked", () => {
    beforeEach(() => {
      userEvent.click(screen.getByText("Dark"));
    });

    it("then uses the dark theme", () => {
      expect(screen.getByText("Light")).toBeTruthy();
    });
  });
});

describe("<ThemeContext.Provider />", () => {
  describe("when theme is dark", () => {
    interface ThemeCtx {
      theme: "dark" | "light";
      toggle: () => void;
    }

    const theme: ThemeCtx = {
      theme: "dark",
      toggle: () => undefined,
    };

    beforeEach(() => {
      render(
        <ThemeContext.Provider value={theme}>
          <Header />
          <Information />
        </ThemeContext.Provider>
      );
    });

    describe("when clicking toggle", () => {
      it("theme is initilized with dark", () => {
        expect(
          screen.getByText("Welcome to the meme generator! With theme dark")
        ).toBeTruthy();
      });
    });
  });

  describe("when theme is light", () => {
    interface ThemeCtx {
      theme: "dark" | "light";
      toggle: () => void;
    }

    const theme: ThemeCtx = {
      theme: "light",
      toggle: () => undefined,
    };

    beforeEach(() => {
      render(
        <ThemeContext.Provider value={theme}>
          <Header />
          <Information />
        </ThemeContext.Provider>
      );
    });

    describe("when clicking toggle", () => {
      it("theme is initilized with light", () => {
        expect(
          screen.getByText("Welcome to the meme generator! With theme light")
        ).toBeTruthy();
      });
    });
  });
});
