import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

/* ================= HEADER ================= */

const Header = () => {
  return (
    <div className="header">
      <h1>Food Villa</h1>
    </div>
  );
};

/* ================= SEARCH ================= */

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
      />
    </div>
  );
};

/* ================= RESTAURANT CARD ================= */

const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

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

/* ================= BODY ================= */

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const API_URL = "https://namastedev.com/api/v1/listRestaurants";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();

      // Find the card that contains restaurants safely
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
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

/* ================= FOOTER ================= */

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>Food Villa</h2>
          <p>Delicious food delivered to your doorstep.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Pune, Maharashtra</p>
          <p>+91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Food Villa
      </div>
    </footer>
  );
};

/* ================= APP ================= */

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// JSX - JavaScript XML
// JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It is commonly used in React to describe the UI structure and appearance of components. JSX makes it easier to create and visualize the structure of your UI, as it closely resembles HTML, while still allowing you to use JavaScript expressions and logic within it. When you write JSX, it gets transpiled into regular JavaScript function calls that create React elements, which can then be rendered to the DOM.
// JSX allows you to write code that is more readable and maintainable, as it provides a clear and concise way to define the structure of your UI components. It also enables you to easily integrate JavaScript logic and expressions within your UI, making it a powerful tool for building dynamic and interactive web applications with React.
// JSX is not a requirement for using React, but it is widely adopted and recommended for its benefits in improving code readability and maintainability. It allows developers to write code that closely resembles the final output, making it easier to understand and work with the UI structure of their applications.
// JSX (It transpiles before it reaches to javascript) is not supported by browsers, so it needs to be transpiled into regular JavaScript using tools like Babel before it can be executed in the browser. This transpilation process converts JSX syntax into standard JavaScript function calls that create React elements, which can then be rendered to the DOM. The resulting JavaScript code is what browsers can understand and execute to render the UI components defined in JSX.
// Parcel  - Babel - Transpiler - JSX to JavaScript

// Functional Component
// const Title = () => {
//     return <h1 id="heading_title" className="heading-class"><i>Namaste React</i></h1>;
// }
// const Heading = () => {
//     // this is known as Component Composition, where we can use one component inside another component. Here we are using

//     return (
//     <div>
//         <Title />
//         <h1 id="heading" className="heading-class">Hello Namaste React</h1>
//     </div>);
// }

//const heading = <h1 id="heading" className="heading-class">Hello Namaste React</h1>;
//console.log(heading); // return an object with type, props and key
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<App />);
/***
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * <div id="child2">
 * <h1>I am h1 tag</h1>
 * <h2>I am h2 tag</h2>
 * </div>
 * </div>
 *
 *
 *
 */

// const parent = React.createElement("div", {id: "parent"},
// [
//         React.createElement("div", {id: "child"},[
//         React.createElement("h1", {}, "I am Nmaste React"),
//         React.createElement("h2", {}, "I am h2 tag")
//     ]),
//         React.createElement("div", {id: "child2"},[
//         React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag")
//     ])
// ]
// );

//const heading = React.createElement("h1", {id: "heading", className: "heading-class"}, "Hello Namaste React");
//console.log( heading); // return an aboject with type, props and key
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//root.render(parent);
