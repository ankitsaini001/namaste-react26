import React from "react";
import ReactDOM from "react-dom/client";

// lets start working on our first react component
// Header Component
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/11/Logo-Template-for-Food-4-scaled.jpg"
        alt="logo"
        className="logo"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

// Restaurant List Component
const RestaurantList = () => {
    return (
        <div className="restaurant-list">
            <div className="restaurant-card">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/17/57c9176a-f4c7-4ca3-8db3-d7d7a531d65f_993ef335-5221-48f3-9e70-2725d14a6dc8.jpg"
            alt="restaurant"
            className="restaurant-image"
          />
          <h2 className="restaurant-name">Biryani By Kilo</h2>
          <h3 className="restaurant-cuisine">Biryani, Hyderabadi, Mughlai</h3>
          <h4 className="restaurant-rating">4.5</h4>
        </div>
        <div className="restaurant-card">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/17/57c9176a-f4c7-4ca3-8db3-d7d7a531d65f_993ef335-5221-48f3-9e70-2725d14a6dc8.jpg"
            alt="restaurant"
            className="restaurant-image"
          />
          <h2 className="restaurant-name">Biryani By Kilo</h2>
          <h3 className="restaurant-cuisine">Biryani, Hyderabadi, Mughlai</h3>
          <h4 className="restaurant-rating">4.5</h4>
        </div>
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">
      <SearchBar />
      {/* <div className="restaurant-list"> */}
        <RestaurantList/>
      {/* </div> */}
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">Food Villa</h2>
          <p className="footer-description">
            Delicious food delivered to your doorstep. Experience taste like never before.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Pune, Maharashtra</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@foodvilla.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Food Villa. All Rights Reserved.
      </div>
    </footer>
  );
};

const App = () => {
  return (  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>);
};

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
