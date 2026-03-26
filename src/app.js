import ReactDOM from "react-dom/client";

/* ================= HEADER ================= */

import Header from "./components/Header";

/* ================= SEARCH ================= */

/* ================= RESTAURANT CARD ================= */

/* ================= BODY ================= */

import Body from "./components/Body";

/* ================= FOOTER ================= */

import Footer from "./components/Footer";

/* ================= React Router ================= */

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RestaurantMenuList from "./components/RestaurantMenuList";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import ContactForm from "./components/ContactForm";
// import Grocery from "./components/Grocery";

/* ================= APP ================= */

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // make an api call and send username to the server and get the user data and set it in the context
    const user = {
      name: "Ankit Saini",
    };
    setUserName(user.name);
  }, []);
  // Write user Authentication dummy logic here

  return (
    <div className="app">
      <UserContext.Provider value={{ user: userName, setUserName }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
      <Footer />
    </div>
  );
};

// create a React Router
const appRouter = createBrowserRouter([
  {
    // future: {
    //   v7_fetcherPersist: true,
    // },
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenuList />,
      },
      { path: "test", element: <h1>TEST PAGE</h1> },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "contactform",
        element: <ContactForm />,
      },
    ],
    errorElement: <Error />,
  },
]);
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
root.render(<RouterProvider router={appRouter} />);
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
