import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>

        <form className="login-form">
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
           <p className="signup-link">
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;