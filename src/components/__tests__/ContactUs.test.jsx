import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("renders contact form correctly",() =>{
    // We first have to render the component to test it
    render(<ContactUs />);

    // Then we can check if the elements are in the document
    const titleElement = screen.getByRole("heading");

    // we can expect the title to be in the document
    expect(titleElement).toBeInTheDocument();
});
