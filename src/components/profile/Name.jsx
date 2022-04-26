import React from "react";
import "./profile.style.css";

const Name = (props) => {
	return (
		<div className="naming">
			<h1>I am {props.name}</h1>
			<p>
				{props.firstBio}
			</p>
			<p>
				{props.secondBio}
			</p>
		</div>
	);
};

export default Name;
