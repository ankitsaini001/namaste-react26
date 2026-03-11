import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import RestaurantCard from "./RestaurantCard";
import { RESTRO_API_URL } from "../utils/content";
import FilterTopRatedRestro from "./FilterTopRatedRestro";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredTopRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
  const handleTopRated = useCallback(() => {
    const filtered = filteredTopRestaurants.filter(
      (res) => parseFloat(res?.info?.avgRating) > 4.5,
    );

    setRestaurants(filtered);
  }, [filteredTopRestaurants]);

  // Search Filter
  const searchFilter = useCallback(() => {
    if (!searchText.trim()) {
      setRestaurants(filteredTopRestaurants);
      return;
    }
    
    const filtered = filteredTopRestaurants.filter((res) => {
      const name = res?.info?.name || "";
      return name.toLowerCase().includes(searchText.toLowerCase());
    });
    
    setRestaurants(filtered);
  }, [filteredTopRestaurants, searchText]);

  // Shimmer Effect - Loading State
  // This is known as consitional rendering in React. It allows us to render different components or elements based on certain conditions. In this case, we check if the restaurants array is empty. If it is, we render the Shimmer component to indicate that data is being loaded. Once the data is fetched and the restaurants array is populated, the Shimmer component will no longer be rendered, and instead, the list of restaurants will be displayed.
  // if (restaurants.length === 0) {
  //   return (
  //     <Shimmer/>
  //   );
  // }

  return filteredTopRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
      <FilterTopRatedRestro onFilter={handleTopRated} />
      <SearchBar searchText={searchText} setSearchText={setSearchText} searchFilter={searchFilter} />
      {restaurants.length === 0 ? (
        <div style={{ textAlign: "center", padding: "20px", fontSize: "18px", color: "#999" }}>
          No restaurants found. Try a different search.
        </div>
      ) : (
        <div className="restaurant-list">
          {restaurants.map((restaurant, index) => (
            //<Link to ='/restaurant/' + restaurant?.info?.id} key={restaurant?.info?.id || index>
            <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id || index}>
            <RestaurantCard
              data={restaurant}
            />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
