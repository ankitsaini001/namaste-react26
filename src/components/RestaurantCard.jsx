import { use, useContext } from "react";
import {RESTRO_IMG_URL} from "../utils/content";
import UserContext from "../utils/userContext";

const IMG_URL = RESTRO_IMG_URL;

const RestaurantCard = ({ data }) => {
 // console.log(data);
  
  const info = data?.info;
  const {user} = useContext(UserContext);

  if (!info) return null;

  return (
    <div className="restaurant-card" data-testid="restaurant-card">
      <img
        src={IMG_URL + info.cloudinaryImageId}
        alt={info.name}
        className="restaurant-image"
      />
      <h2>{info.name}</h2>
      <h3>{info.cuisines?.join(", ")}</h3>
      <h4>⭐ {info.avgRating}</h4>
      <p className="italic text-[9px]">{user}</p>
    </div>
  );
};

export const isVegetarian = (RestaurantCard) => {
  return (props) => {
    const isVeg = props?.data?.info?.veg;

    return (
      <div className="relative group">
        
        {/* Badge */}
        <label className="absolute top-[1px] left-2 z-50 bg-white px-0.5 py-0.5 pl-[1px] pr-[1px] rounded shadow">
          {isVeg ? "🟢" : "🔴"}
        </label>

        {/* Card */}
        <div className="transition-transform duration-300 group-hover:scale-105">
          <RestaurantCard {...props} />
        </div>

      </div>
    );
  };
};
export default RestaurantCard;