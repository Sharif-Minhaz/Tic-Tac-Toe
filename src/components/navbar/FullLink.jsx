import React from "react";

function FullLink(props) {
	return (
		<ul className="linkHolder">
			{props.links.map((link) => {
				return (
					<li key={link.link}>
						<a href={link.link}>
							<img src={link.img} alt="logo" />
							<span>{link.link}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default FullLink;
