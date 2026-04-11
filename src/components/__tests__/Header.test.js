import { fireEvent, render, screen } from "@testing-library/react";
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
});

it("should render the header component online status", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    const onlineStatus = screen.getByText(/Online Status:/i);

    expect(onlineStatus).toBeInTheDocument();
});

it("should render the header component cart items", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const cartItems = screen.getByText(/Cart - \(\d+ items\)/i);

    expect(cartItems).toBeInTheDocument();
});

it("should render the header login link rendered onclick", () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const loginButtonAfterClick = screen.getByText("Logout");
    expect(loginButtonAfterClick).toBeInTheDocument();
});
});