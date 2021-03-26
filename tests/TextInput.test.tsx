import { render, fireEvent, waitFor } from "@testing-library/react";
import { TextInput } from "../src/components/TextInput";

describe("when Text Input Component is rendered", () => {
  it("text with getByPlaceholderText", async () => {
    const { getByPlaceholderText } = render(
      <TextInput
        name="topText"
        placeholder="Top Text"
        onChange={() => undefined}
      />
    );
    await waitFor(() => {
      getByPlaceholderText("Top Text");
    });
  });

  it("if text input changes then text input value is updated", async () => {
    const { getByPlaceholderText } = render(
      <TextInput
        name="topText"
        placeholder="Top Text"
        onChange={() => undefined}
      />
    );
    await waitFor(() => {
      getByPlaceholderText("Top Text");
    });
    const topTextInput = getByPlaceholderText("Top Text") as HTMLInputElement;
    fireEvent.change(topTextInput, { target: { value: "something" } });
    await waitFor(() => {
      expect(topTextInput.value).toBe("something");
    });
  });
});
