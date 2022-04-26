import React from "react";

function Heading(props) {
	return (
		<div className="heading">
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
}

export default Heading;
