import { useEffect, useState } from "react";
import { MENU_API_URL } from "./content";

const usefetchRestaurantMenu = (id) => {

  const [resMenuItems, setResMenuItems] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
  }, [id]);

  const fetchRestaurantMenu = async () => {
    try {
      const res = await fetch(MENU_API_URL + id);
      const json = await res.json();

      console.log(json);

      setResMenuItems(json);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return resMenuItems;
};

export default usefetchRestaurantMenu;