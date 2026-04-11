import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component tests", () => {
it("should render the header component login button", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})    
});