import React, { Component } from "react";
import Card from "./Card";
import "./card.style.css";

class AllCard extends Component {
	img1 =
		"https://i.ytimg.com/vi/Y2hgEGPzTZY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8vEHyJkPW3tJp3DDjJFow79Nj6g";
	singleCard1 = {
		img: this.img1,
		time: "2:40",
		views: "606k views",
		dateTime: "3 years ago",
		title: "React js tutorial - 4 - Components",
		authorImg:
			"https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s68-c-k-c0x00ffffff-no-rj",
		authorName: "Codevolution",
		des: "Business - codevolution.business@gmail.com Components let you split the UI into independent, reusable pieces, and think.",
	};
	img2 =
		"https://i.ytimg.com/vi/m7OWXtbiXX8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpAwDr8cdRRyrqVPfyNNNTHQaJlQ";
	singleCard2 = {
		img: this.img2,
		time: "3:45",
		views: "1M views",
		dateTime: "13 years ago",
		title: "React js tutorial - 9 - Components",
		authorImg:
			"https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s68-c-k-c0x00ffffff-no-rj",
		authorName: "Codevolution",
		des: "Business - codevolution.business@gmail.com.",
	};
	img3 =
		"https://i.ytimg.com/an_webp/SEkfzqIgvTo/mqdefault_6s.webp?du=3000&sqp=COiKzJIG&rs=AOn4CLBauqJs9nxkmzBiIw1abHGL3bDCJQ";
	singleCard3 = {
		img: this.img3,
		time: "32:20",
		views: "396k views",
		dateTime: "1 years ago",
		title: "6 Pro Tips from React Developers",
		authorImg:
			"https://yt3.ggpht.com/ytc/AKedOLTM6bGgJWtayEJrZHApYyJSaBqWLkMnXixAVvc85Q=s68-c-k-c0x00ffffff-no-rj",
		authorName: "Go-away",
		des: "This video is designed to get you familiar with both Functional components & Class based components where we cover topics",
	};
	render() {
		return (
			<div className="container">
				<Card {...this.singleCard1} />
				<Card {...this.singleCard2} />
				<Card {...this.singleCard3} />
			</div>
		);
	}
}

export default AllCard;
