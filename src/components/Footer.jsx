import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/content";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <img
        src={APP_LOGO}
        alt="logo"
        className="logo"
      />
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" className="nav">Home</Link></li>
            <li><Link to="/about" className="nav">About Us</Link></li>
            <li><Link to="/menu" className="nav">Menu</Link></li>
            <li><Link to="/contact" className="nav">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Pune, Maharashtra</p>
          <p>+91 98765 43210</p>
          <p>support@foodvilla.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Food Villa
      </div>
    </footer>
  );
};
export default Footer;