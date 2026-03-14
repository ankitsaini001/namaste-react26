const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-subtitle">
          We'd love to hear from you. Reach out to us using the details below.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <p>info@company.com</p>
          </div>

          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <p>+1 123-456-7890</p>
          </div>

          <div className="contact-item">
            <span className="contact-label">Address</span>
            <p>123 Business Street, Tech City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;