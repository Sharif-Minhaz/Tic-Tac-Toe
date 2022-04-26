import React, { Component } from "react";
import Search from "./Search";
import Links from "./Links";
import Identity from "./Identity";
import "./navbar.style.css";

class Navbar extends Component {
	image = "https://freepngimg.com/download/logo/168823-logo-gucci-pic-png-image-high-quality.png";
	navInfo = {
		brand: "REVIVE",
		logo: this.image,
		links: [
			{
				link: "home",
				img: this.image,
			},
			{
				link: "Profile",
				img: this.image,
			},
			{
				link: "Dashboard",
				img: this.image,
			},
			{
				link: "Settings",
				img: this.image,
			},
		],
	};
	
	render() {
		return (
			<nav>
				<Identity brand={this.navInfo.brand} logo={this.navInfo.logo} />
				<Search />
				<Links links={this.navInfo.links} />
			</nav>
		);
	}
}

export default Navbar;
