import { fireEvent, getByText, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { callApiMocked } from "../services/DataImages";
import { MemeGenerator } from "../src/components/MemeGenerator";

describe("when Meme Generator component is rendered", () => {
  it("if inputs are changed then display new values", async () => {
    const someTextAtTop: string = "something at the top";
    const someTextAtBottom: string = "something at the bottom";
    const { getByPlaceholderText, getByText } = render(
      <MemeGenerator apiCall={callApiMocked} />
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
  it("if button is clicked, the image changes", async () => {
    const { getByText, getByRole, getByAltText } = render(
      <MemeGenerator apiCall={callApiMocked} />
    );
    await waitFor(() => {
      getByAltText("");
    });
    userEvent.click(getByText("Generate 0 times"));
    await waitFor(() => {
      getByAltText(/Two Buttons|Drake Hotline Bling|Distracted Boyfriend/); //mejorar!
    });
  });
});
