import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs component tests", () => {
  test("renders contact form correctly", () => {
    // We first have to render the component to test it
    render(<ContactUs />);

    // Then we can check if the elements are in the document
    const titleElement = screen.getByRole("heading");

    // we can expect the title to be in the document
    expect(titleElement).toBeInTheDocument();
  });

  test("render contact form email", () => {
    render(<ContactUs />);
    const emailElement = screen.getByText("Email");
    expect(emailElement).toBeInTheDocument();
  });

  test("render contact form phone", () => {
    render(<ContactUs />);
    const phoneElement = screen.getByText("Phone");
    expect(phoneElement).toBeInTheDocument();
  });

  test("render contact form for contact-item", () => {
    render(<ContactUs />);
    const contactItems = screen.getAllByRole("paragraph");
    expect(contactItems.length).not.toBe(3);
  });

  it("render contact form for contact-item", () => {
    render(<ContactUs />);
    const contactItems = screen.getAllByRole("paragraph");
    expect(contactItems.length).toBe(4);
  });
});
