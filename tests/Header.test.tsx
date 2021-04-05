import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";

describe("when Header component is rendered", () => {
  it("meme generator text is displayed", async () => {
    const { getByText } = render(<Header />);
    await waitFor(() => {
      getByText("Meme Generator");
    });
  });
});

describe("when Footer component is rendered", () => {
  it("meme generator text is displayed", async () => {
    const { getByText } = render(<Footer />);
    await waitFor(() => {
      getByText("Meme Generator");
    });
  });
});
