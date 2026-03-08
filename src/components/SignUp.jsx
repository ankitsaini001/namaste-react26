import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Create Account</h1>

        <form className="signup-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;