import { LocationProvider, navigate } from "@reach/router";
import { fireEvent, getByText, render, waitFor } from "@testing-library/react";
import { CustomMeme } from "../src/components/CustomMeme";

describe("when Custom Meme component is rendered", () => {
  it("if inputs are changed then display new values", async () => {
    const someTextAtTop: string = "something at the top";
    const someTextAtBottom: string = "something at the bottom";

    const { getByPlaceholderText, getByText } = render(
      <LocationProvider>
        <CustomMeme />
      </LocationProvider>
    );
    await waitFor(() => {
      getByPlaceholderText("Top Text");
      getByPlaceholderText("Bottom Text");
    });
    fireEvent.change(getByPlaceholderText("Top Text"), {
      target: { value: someTextAtTop },
    });
    await waitFor(() => {
      getByText(someTextAtTop);
    });
    fireEvent.change(getByPlaceholderText("Bottom Text"), {
      target: { value: someTextAtBottom },
    });
    await waitFor(() => {
      getByText(someTextAtBottom);
    });
  });
});
