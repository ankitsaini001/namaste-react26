import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { RESTRO_API_URL } from "../utils/content";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const API_URL = RESTRO_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      // Find the card that contains restaurants safely
      const cards = json?.data?.data?.cards;

      const restaurantCard = cards?.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      // 🔥 Remove "Spice Kingdom"
      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant?.info?.name !== "Spice Kingdom",
      );

      setRestaurants(filteredRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <SearchBar />
      {/* use unique key is best practice rather then index key */}
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.info?.id || index}
            data={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;