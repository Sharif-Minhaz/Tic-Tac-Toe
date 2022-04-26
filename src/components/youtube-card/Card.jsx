import React, { Component } from "react";
import Thumb from "./Thumb";
import Heading from "./Heading";

class Card extends Component {
	render() {
		return (
			<div className="card-body">
				<Thumb img={this.props.img} time={this.props.time} />
				<Heading title={this.props.title}>
					{/* props.children start from here */}
					<small>
						{this.props.views} ● {this.props.dateTime}
					</small>
					<div className="auth-section">
						<img src={this.props.authorImg} alt="author-img" />
						<small>{this.props.authorName}</small>
					</div>
					<p>{this.props.des}</p>
					{/* props.children end till here */}
				</Heading>
			</div>
		);
	}
}

export default Card;
