import Shimmer from "./Shimmer";
import { MENU_IMG_URL } from "../utils/content";
import { useParams } from "react-router";
import usefetchRestaurantMenu from "../utils/usefetchRestaurantMenu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuList = () => {
  const { id } = useParams();
  const jsonData = usefetchRestaurantMenu(id); // custom hook to fetch restaurant menu data
  const [expandedCategoryId, setExpandedCategoryId] = useState(null); // Track which category is expanded

  const dispatched = useDispatch();

  const addClickItem = (item) => {
    console.log("btn clicked");
    dispatched(addItem(item));
  };

  if (!jsonData) return <Shimmer />;

  // Correct path
  const restaurantInfo = jsonData?.data?.cards?.[2]?.card?.card?.info;

  const items =
    jsonData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = items.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  );

  const handleClick = (categoryId) => {
    // Toggle: if clicked category is already open, close it; otherwise open it
    setExpandedCategoryId(
      expandedCategoryId === categoryId ? null : categoryId,
    );

    //console.log("Category clicked!", categoryId);
  };

  if (!categories.length) return <Shimmer />;

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
      {categories.map((category, index) => {
        const { title, itemCards, categoryId } = category?.card?.card;
        const keyId = categoryId ?? index; // use categoryId when available, otherwise fallback to index
        const isExpanded = expandedCategoryId === keyId;

        return (
          <div
            className="category shadow-lg my-auto p-2 bg-gray-100 rounded"
            key={keyId}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => handleClick(keyId)}
            >
              <span className="category-title font-bold">
                {title} ({itemCards?.length})
              </span>
              <span>{isExpanded ? "🔺" : "🔻"}</span>
            </div>
            {isExpanded && (
              <div className="item-list mt-2">
                {itemCards?.map((item) => {
                  const info = item?.card?.info;

                  return (
                    <div className="menu-item" key={info?.id}>
                      <div className="menu-item-content">
                        <h4>{info?.name}</h4>
                        <p>{info?.description}</p>

                        <p>₹{(info?.price || info?.defaultPrice) / 100}</p>
                      </div>

                      {info?.imageId && (
                        <img
                          className="item-image"
                          src={MENU_IMG_URL + info?.imageId}
                          alt={info?.name}
                        />
                      )}
                      <button
                        className="p-2 bg-indigo-200 shadow-lg "
                        onClick={() => addClickItem(item)}
                      >
                        {" "}
                        Add
                      </button>
                    </div>
                  );
                })}
                <div />
              </div>
            )}
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
