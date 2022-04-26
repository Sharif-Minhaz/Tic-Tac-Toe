import React, { Component } from "react";

const Social = (props) => {
	return (
		<div className="social">
			<h3>Social: </h3>
			<ul>
				{props.social.map((link) => {
					return (
						<li>
							<a href="#">{link}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Social;
