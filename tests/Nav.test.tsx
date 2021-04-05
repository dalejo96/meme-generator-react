import { render, waitFor } from "@testing-library/react";
import { Nav } from "../src/components/Nav";

describe("when Nav component is rendered", () => {
  it("text of switch button and nav options are displayed", async () => {
    const { getByText } = render(<Nav />);
    await waitFor(() => {
      getByText("Meme Generator");
      getByText("Home");
      getByText("Random Meme");
      getByText("About");
      getByText("Light");
      getByText("Dark");
    });
  });
});
