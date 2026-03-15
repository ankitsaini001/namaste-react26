// Class-based component to create a card for team members on the About Us page
import React from "react";
import {USER_API_URL} from "../utils/content";

class AboutTeamCard extends React.Component {
  constructor(props) {
    super(props);

    console.log("Constructor called");

    // Initial state
    this.state = {
      employeeId: 123,
      count: 0,
      userInfo: null,
    };
  }

  // Lifecycle method - runs after component is mounted
  async componentDidMount() {
    this.interval = setInterval(() => {
        console.log("Interval running every 1 second");
    }, 1000);
    console.log("componentDidMount called");

    try {
      const response = await fetch(USER_API_URL);

      const data = await response.json();
      console.log(data);

      this.setState({
        userInfo: data,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }
  componentDidUpdate() {
    // This method is called after every update to the component (state or props change)
    // You can perform side effects here, but be careful to avoid infinite loops
    // For example, you could check if a specific state value has changed before performing an action
    if (this.state.count !== 0) {
      console.log("Count has been updated to:", this.state.count);
    }
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval to prevent memory leaks
    console.log("componentWillUnmount called");
  }

  render() {
    console.log("Render called");

    const { image } = this.props;
    const { count, userInfo } = this.state;

    return (
      <div className="team-card">
        <img src={image} alt="team member" className="team-image" />

        <h2 className="team-name">{userInfo?.name}</h2>
        <p className="team-role">{userInfo?.email}</p>
        <p className="team-phone">{userInfo?.phone}</p>

        <p className="team-company">Company: {userInfo?.company?.name}</p>

        <button
          type="button"
          className="team-btn"
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          Count: {count}
        </button>
      </div>
    );
  }
}

export default AboutTeamCard;
