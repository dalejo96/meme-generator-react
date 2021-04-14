import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../src/components/ContactForm";

describe("when Contact Form  component is rendered", () => {
  it("if button is clicked then Title, FirstName, LastName, Email, Detail text is required", async () => {
    const { getByText } = render(<ContactForm />);
    userEvent.click(getByText("Register"));
    await waitFor(() => {
      getByText("Title is required");
      getByText("First Name is required");
      getByText("Last name is required");
      getByText("Email is required");
      getByText("Detail is required");
    });
  });
  it("if Title is selected and First Name is filled, then LastName, Email, Detail text is required", async () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    await waitFor(() => {
      getByPlaceholderText("Title");
      getByPlaceholderText("First Name");
    });
    fireEvent.change(getByPlaceholderText("Title"), {
      target: { value: "Mr" },
    });
    fireEvent.change(getByPlaceholderText("First Name"), {
      target: { value: "some first text" },
    });
    userEvent.click(getByText("Register"));
    await waitFor(() => {
      getByText("Last name is required");
      getByText("Email is required");
      getByText("Detail is required");
    });
  });
  it("if Title is selected and First Name is filled, then LastName, Email, Detail text is required", async () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm />);
    await waitFor(() => {
      getByPlaceholderText("Title");
      getByPlaceholderText("First Name");
    });
    fireEvent.change(getByPlaceholderText("Title"), {
      target: { value: "Mr" },
    });
    await waitFor(() => {
      getByText("Title");
    });
  });
});
