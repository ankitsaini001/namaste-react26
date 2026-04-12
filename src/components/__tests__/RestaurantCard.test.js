import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMockCard.json";
import RestaurantCard, { isVegetarian } from "../RestaurantCard";
import "@testing-library/jest-dom";

describe("RestaurantCard Component", () => {
  it("should render the restaurant card component", () => {
    render(<RestaurantCard data={MOCK_DATA} />);

    const restaurantName = screen.getByText("Pizza Paradise");
    expect(restaurantName).toBeInTheDocument();
  });

  it("should render the restaurant card component with status badge", () => {
    const VegRestaurantCard = isVegetarian(RestaurantCard);
    render(<VegRestaurantCard data={MOCK_DATA} />);

    const nonvegBadge = screen.getByText("🔴");
    expect(nonvegBadge).toBeInTheDocument();
  });
});
