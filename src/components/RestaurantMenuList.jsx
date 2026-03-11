import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_API_URL} from "../utils/content";
import { useParams } from "react-router";

const RestaurantMenuList = () => {
  const [resMenuItems, setResMenuItems] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const res = await fetch(MENU_API_URL+id);

      const jsonData = await res.json();
      console.log(jsonData);
      

      const restaurantInfo = jsonData?.data?.cards[2]?.card?.card?.info;
      setRestaurantInfo(restaurantInfo);

      const items =
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
        [];

      const categories = items.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setResMenuItems(categories);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  if (resMenuItems.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="menu-container">
      
      {/* Restaurant Info */}
      <div className="restaurant-info">
        <h1>{restaurantInfo?.name}</h1>
        <p>{restaurantInfo?.cuisines?.join(", ")}</p>
        <p>⭐ {restaurantInfo?.avgRating}</p>
        <p>{restaurantInfo?.costForTwoMessage}</p>
      </div>

      <hr />

      {/* Categories */}
      {resMenuItems
        .filter((category) => category?.card?.card?.itemCards)
        .map((category, index) => {
          const { title, itemCards, categoryId } = category?.card?.card;

          return (
            <div className="category" key={categoryId || `category-${index}`}>
              <h3 className="category-title">{title}</h3>

              {itemCards
                .filter((item) => item?.card?.info)
                .map((item, itemIndex) => {
                  const {
                    id,
                    name,
                    description,
                    price,
                    defaultPrice,
                    imageId,
                  } = item?.card?.info;

                  return (
                    <div
                      className="menu-item"
                      key={id || `item-${index}-${itemIndex}`}
                    >
                      <div className="menu-item-content">
                        <h4 className="item-name">{name}</h4>
                        <p className="item-desc">{description}</p>
                        <p className="item-price">
                          ₹{(price || defaultPrice) / 100}
                        </p>
                      </div>

                      {imageId && (
                        <img
                          className="item-image"
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
                          alt={name}
                        />
                      )}
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantMenuList;

// import { useEffect, useState } from "react";

// const RestaurantMenuList = () => {
//   const [restaurantInfo, setRestaurantInfo] = useState({});
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     fetchRestaurantMenu();
//   }, []);

//   const fetchRestaurantMenu = async () => {
//     try {
//       const res = await fetch(
//         "https://namastedev.com/api/v1/listRestaurantMenu/123456"
//       );

//       const jsonData = await res.json();
//       console.log(jsonData);

//       // Restaurant info
//       const info = jsonData?.data?.cards[2]?.card?.card?.info;
//       setRestaurantInfo(info);

//       // Menu categories
//       const categories =
//         jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//       setMenu(categories);
//     } catch (error) {
//       console.error("Error fetching restaurant menu:", error);
//     }
//   };

//   // Filter valid categories
//   const categories = menu.filter((c) => c?.card?.card?.itemCards);

//   return (
//     <div>

//       {/* Restaurant Info */}
//       <h1>{restaurantInfo?.name}</h1>
//       <p>{restaurantInfo?.cuisines?.join(", ")}</p>
//       <p>Rating: {restaurantInfo?.avgRating}</p>
//       <p>{restaurantInfo?.costForTwoMessage}</p>

//       <h2>Menu</h2>

//       {/* Menu Categories */}
//       {categories.map((category) => {

//         const { title, itemCards } = category?.card?.card;

//         return (
//           <div key={title}>

//             <h3>{title}</h3>

//             {itemCards.map((item) => {
//               const info = item?.card?.info;

//               return (
//                 <div key={info?.id}>
//                   <h4>{info?.name}</h4>
//                   <p>{info?.description}</p>
//                   <p>Price: ₹{info?.price / 100}</p>
//                 </div>
//               );
//             })}

//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default RestaurantMenuList;
