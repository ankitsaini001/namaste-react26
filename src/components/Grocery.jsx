const Grocery = () => {

  const groceryItems = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 60,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
    },
    {
      id: 3,
      name: "Fresh Milk",
      price: 50,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      id: 4,
      name: "Brown Bread",
      price: 40,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    },
    {
      id: 5,
      name: "Tomatoes",
      price: 35,
      image: "https://images.unsplash.com/photo-1561136594-7f68413baa99"
    },
    {
      id: 6,
      name: "Fresh Apples",
      price: 120,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    {
      id: 7,
      name: "Organic Bananas",
      price: 60,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
    },
    {
      id: 8,
      name: "Fresh Milk",
      price: 50,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      id: 9,
      name: "Brown Bread",
      price: 40,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
    },
    {
      id: 10,
      name: "Tomatoes",
      price: 35,
      image: "https://images.unsplash.com/photo-1561136594-7f68413baa99"
    },
    {
      id: 11,
      name: "Fresh Apples",
      price: 120,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    {
      id: 12,
      name: "Organic Bananas",
      price: 60,
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
    },
  ];

  return (
    <div className="grocery-container">
      <h1>Grocery Store</h1>

      <div className="grocery-card-container">
        {groceryItems.map((item) => (
          <div className="grocery-card" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
              className="grocery-image"
            />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            {/* <button>Add to Cart</button> */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;