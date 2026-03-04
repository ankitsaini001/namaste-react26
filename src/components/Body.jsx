import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { RESTRO_API_URL } from "../utils/content";
import FilterTopRatedRestro from "./FilterTopRatedRestro";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredTopRestaurants, setFilteredRestaurants] = useState([]);

  const API_URL = RESTRO_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      // Find the card that contains restaurants safely
      // Optional Chaining (?.) is used to prevent errors if any part of the path is undefined or null. It allows us to safely access nested properties without worrying about runtime errors if any intermediate property is missing. If any part of the chain is undefined or null, the entire expression will return undefined instead of throwing an error, making it easier to handle cases where data may not be structured as expected.
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
      setFilteredRestaurants(filteredRestaurants);

      // Fetch top-rated restaurants
      // const handleFilterRestro = () => {
      //     const topRatedRestaurants = filteredRestaurants.filter(
      //     (restaurant) => restaurant?.info?.avgRating >= 4.1
      // );
      // setFilteredRestaurants(topRatedRestaurants);
      // }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Define OUTSIDE fetchData
  const handleTopRated = () => {
    const filtered = filteredTopRestaurants.filter(
      (res) => parseFloat(res?.info?.avgRating) > 4.5,
    );

    setRestaurants(filtered);
  };

  return (
    <div className="body">
      <FilterTopRatedRestro onFilter={handleTopRated} />
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
