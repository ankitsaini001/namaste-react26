import { useEffect, useState } from "react";

const RestaurantMenuList = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [menu, setMenu] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const menuData = await fetch(
        "https://namastedev.com/api/v1/listRestaurantMenu/123456"
      );

      const jsonData = await menuData.json();
      console.log(jsonData);
      

      // Restaurant info
      const info = jsonData?.data?.cards[2]?.card?.card?.info;
      setRestaurantInfo(info);

      // Menu categories
      const categories =
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        console.log(categories);
        
      setMenu(categories);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  const { title, itemCards } = menu?.[1]?.card?.card || {};

  return (
    <div style={{ maxWidth: "800px", margin: "auto", fontFamily: "sans-serif" }}>
      
      {/* Restaurant Info */}
      <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "20px" }}>
        <h1>{restaurantInfo?.name}</h1>
        <p>{restaurantInfo?.cuisines?.join(", ")}</p>
        <p>⭐ {restaurantInfo?.avgRating}</p>
        <p>{restaurantInfo?.costForTwoMessage}</p>
      </div>

      {/* Accordion */}
      <div style={{ marginTop: "20px" }}>
        <div
          onClick={() => setShowItems(!showItems)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{title}</h3>
          <span>{showItems ? "▲" : "▼"}</span>
        </div>

        {showItems && (
          <div style={{ marginTop: "15px" }}>
            {itemCards?.map((item) => {
              const info = item?.card?.info;

              return (
                <div
                  key={info?.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eee",
                    padding: "15px 0",
                  }}
                >
                  <div style={{ width: "70%" }}>
                    <h4>{info?.name}</h4>
                    <p>₹ {info?.price / 100}</p>
                    <p style={{ color: "#555" }}>{info?.description}</p>
                  </div>

                  {info?.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                      alt={info?.name}
                      width="120"
                      style={{ borderRadius: "10px" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>

      </div>
    </div>
  );
};

export default RestaurantMenuList;