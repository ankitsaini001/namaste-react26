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
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact</li>
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