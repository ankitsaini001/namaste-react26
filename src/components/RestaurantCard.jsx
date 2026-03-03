import {RESTRO_IMG_URL} from "../utils/content";

const IMG_URL = RESTRO_IMG_URL;

const RestaurantCard = ({ data }) => {
  const info = data?.info;

  if (!info) return null;

  return (
    <div className="restaurant-card">
      <img
        src={IMG_URL + info.cloudinaryImageId}
        alt={info.name}
        className="restaurant-image"
      />
      <h2>{info.name}</h2>
      <h3>{info.cuisines?.join(", ")}</h3>
      <h4>⭐ {info.avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;