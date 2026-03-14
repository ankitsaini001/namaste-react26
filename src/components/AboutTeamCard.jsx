// Here we are using classbased component to create a card for our team members in the about us page. We will use this card to display the name, role and image of our team members.
import React from "react";

class AboutTeamCard extends React.Component {
    // for props we have to use constructor and super to initialize the props in classbased component.
    constructor(props){
        // super props is used to initialize the props in the classbased component.
        super(props);
        // we can also use state in classbased component but here we are not using state as we are only displaying the data passed from the parent component.
        this.state = {
            employeeId: 123,
            count: 0,
        }
    }
    render() {

        const {name, role, image} = this.props;
        const {employeeId} = this.state;
        const {count} = this.state || 0;

        return (
            <div className="team-card">
                <img src={image} alt={name} className="team-image" />
                <h2 className="team-name">{name}</h2>
                <p className="team-role">{role}</p>
                <p className="team-id">Employee ID: {employeeId}</p>

                <button type="button" onClick={()=>{
                    // To update the state variable in class component we uses setSate Variable
                    this.setState({
                        count: this.state.count+1,
                    });
                }}>Count: {count}</button>
            </div>
        );
    }

} 

export default AboutTeamCard;