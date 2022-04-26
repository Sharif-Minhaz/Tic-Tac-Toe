import React, { Component } from "react";
import "./profile.style.css";
import Name from "./Name";
import Skills from "./Skills";
import Social from "./Social";

class Profile extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="container">
				<Name
					name={this.props.name}
					firstBio={this.props.firstBio}
					secondBio={this.props.secondBio}
				/>
				<Skills skills={this.props.skills} />
				<Social social={this.props.social} />
			</div>
		);
	}
}

export default Profile;
