import { useContext, useState } from "react";
import { APP_LOGO } from "../utils/content";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const isOnline = useOnlineStatus();
  const data = useContext(UserContext);

  //let logoUrl = "Login";
  return (
    <div className="header">
      <img src={APP_LOGO} alt="logo" className="logo" />
      <div className="nav-items">
        <ul className="px-4 py-2">
          <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/" className="nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav">
              Grocery
            </Link>
          </li>
          {/* 
          Why we use useState for logoUrl instead of a simple variable?
          In React, when we want to create interactive components that can change their state over time, we use the useState hook. This allows us to manage state in functional components. If we were to use a simple variable for logoUrl, it would not trigger a re-render of the component when its value changes. This means that even if we update logoUrl to "Logout", the component would not reflect this change in the UI. By using useState, we can ensure that any updates to logoUrl will cause the component to re-render and display the updated value.
          using let, const or var for logoUrl will not work as expected because they do not trigger a re-render of the component when their value changes. In React, state management is crucial for creating interactive components, and useState is the appropriate way to manage state in functional components.
           <li
            onClick={() => {
              logoUrl = "Logout";
              console.log(logoUrl);
            }}
          >
            {logoUrl}
          </li> */}
          <li
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
              //console.log(loginBtn);
            }}
          >
            {loginBtn}
          </li>
          <li>Welcome, {data?.user}</li>

          {/* Practice form 
          
          1. must create 3 input fields - name, email and message
          2. must create a submit button
          3. on submit, display a thank you message with the name of the user, field should be reset after submit
          4. All fields are mandatory
          5. email field must be a valid email address
          6. if try to submit with any empty fields or invalid email, show an error message
          
          let start with creating a form with 3 input fields and a submit button, then add the validation logic and finally add the thank you message on submit.
          */}
          <li>
            <Link to="/contactform" className="nav">
              Contact Form
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
