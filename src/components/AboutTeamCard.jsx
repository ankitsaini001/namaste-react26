// Here we are using classbased component to create a card for our team members in the about us page. We will use this card to display the name, role and image of our team members.
import React from "react";

class AboutTeamCard extends React.Component {
    // for props we have to use constructor and super to initialize the props in classbased component.
    constructor(props){
        // super props is used to initialize the props in the classbased component.
        super(props);
    }
    render() {

        const {name, role, image} = this.props;

        return (
            <div className="team-card">
                <img src={image} alt={name} className="team-image" />
                <h2 className="team-name">{name}</h2>
                <p className="team-role">{role}</p>
            </div>
        );
    }

} 

export default AboutTeamCard;