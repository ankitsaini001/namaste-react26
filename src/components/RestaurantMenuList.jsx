import { useEffect, useState } from "react";

const RestaurantMenuList = () => {
  const [resMenuItems, setResMenuItems] = useState([]);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  useEffect(() => {
    // Fetch restaurant menu data
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const res = await fetch('https://namastedev.com/api/v1/listRestaurantMenu/123456');
      const jsonData = await res.json();
      console.log(jsonData);

      // Extract restaurant info from the response
      const restaurantInfo = jsonData?.data?.cards[2]?.card?.card?.info;
      console.log(restaurantInfo);
      setRestaurantInfo(restaurantInfo);
        // Extract restaurant items from the response
      const items = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      setResMenuItems(items);
      console.log(setResMenuItems);
      

    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  }

  return (
    <div>
      <h1>{restaurantInfo?.name}</h1>
      <p>{restaurantInfo?.cuisines?.join(", ")}</p>
      <p>Rating: {restaurantInfo?.avgRating}</p>
      <p>{restaurantInfo?.costForTwoMessage}</p>

      <div>
        {
          resMenuItems.map((item) => {
            const { title, itemCards } = item?.card?.card || {};
            return (
              <div>
                <h3 key={title}>{title}</h3>
                <div>
                  {
                    itemCards?.map((itemCard) => {
                      const info = itemCard?.card?.info || {};
                      return (
                        <div key={info?.id}>
                          <ul>
                            <li>{info?.name}</li>
                            <li>{info?.description}</li>
                            <li>Price: ₹{info?.price / 100}</li>
                          </ul>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

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