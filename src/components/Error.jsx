import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  const status = error?.status || "Error";
  const statusText = error?.statusText || "Something went wrong";
  const message = error?.error?.message || error?.message || "Unexpected error occurred.";

  return (
    <div className="error-container">
      <h1 className="error-code">{status}</h1>
      <h2 className="error-title">{statusText}</h2>
      <p className="error-message">{message}</p>

      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;