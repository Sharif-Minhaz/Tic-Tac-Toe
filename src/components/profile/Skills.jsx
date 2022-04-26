import React from "react";

const Skills = (props) => {
	return (
		<div className="skills">
			<h3>Skills: </h3>
			<ul>
				{[...props.skills].map((skill) => {
					return <li key={skill}>{skill}</li>;
				})}
			</ul>
		</div>
	);
};

export default Skills;
