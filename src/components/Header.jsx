import {APP_LOGO} from "../utils/content";

const Header = () => {
  return (
    <div className="header">
      <img
        src= {APP_LOGO}
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

export default Header;