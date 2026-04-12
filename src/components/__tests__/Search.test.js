import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resMockCardList.json";
import UserContext from "../../utils/userContext";
import { MemoryRouter } from "react-router-dom";

// mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render the Top Rated Restaurants component", async () => {
  render(
    <MemoryRouter>
      <UserContext.Provider value={{ user: "", setUserName: jest.fn() }}>
        <Body />
      </UserContext.Provider>
    </MemoryRouter>
  );

  // ✅ wait for API to load (important)
  await screen.findByPlaceholderText(/search for restaurant, cuisine or a dish/i, {}, { timeout: 3000 });
  // ✅ get button
  const topRatedBtn = screen.getByTestId("top-rated-filter");
  // click
  fireEvent.click(topRatedBtn);

  // ✅ get filtered cards
  const cards = await screen.findAllByTestId("restaurant-card");

  expect(cards.length).toBe(3); // depends on your mock
});