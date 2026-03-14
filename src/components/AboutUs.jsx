import AboutTeamCard from "./AboutTeamCard";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About Us</h1>

        <p className="about-text">
          We are a company that values <strong>excellence</strong> and
          <strong> customer satisfaction</strong>. Our mission is to provide
          high-quality products and services while creating a positive and
          inclusive environment for our team.
        </p>

        <p className="about-text">
          Our team is dedicated to <strong>innovation</strong> and
          <strong> continuous improvement</strong>. We constantly strive to
          exceed customer expectations and contribute positively to the
          community.
        </p>

        <p className="about-text">
          Thank you for being part of our journey. 🚀
        </p>
      </div>
      <div className="about-team-card">
        <AboutTeamCard
          name="John Doe"
          role="CEO"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCwNH4Ch0iV5GbcycFuso8r4igYeM96TK4Q&s"
        />
      </div>
    </div>
  );
};

export default AboutUs;