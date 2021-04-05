import { fireEvent, getByText, render, waitFor } from "@testing-library/react";
import { callApiMocked } from "../services/DataImages";
import { MemeGenerator } from "../src/components/MemeGenerator";

describe("when Meme Generator component is rendered", () => {
  it("if inputs are changed then display new values", async () => {
    const { getByPlaceholderText, getByText } = render(
      <MemeGenerator apiCall={callApiMocked} />
    );
    await waitFor(() => {
      getByPlaceholderText("Top Text");
      getByPlaceholderText("Bottom Text");
    });
    const topTextInput = getByPlaceholderText("Top Text") as HTMLInputElement;
    fireEvent.change(topTextInput, {
      target: { value: "something at the top" },
    });
    await waitFor(() => {
      getByText("something at the top");
    });
    const bottomTextInput = getByPlaceholderText(
      "Bottom Text"
    ) as HTMLInputElement;
    fireEvent.change(bottomTextInput, {
      target: { value: "something at the bottom" },
    });
    await waitFor(() => {
      getByText("something at the bottom");
    });
  });
});
