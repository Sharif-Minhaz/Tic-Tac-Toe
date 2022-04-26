import React, { Component } from "react";

class Timer extends Component {
	state = {
		count: 0,
	};

	incrementCount = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrementCount = () => {
		this.state.count > 0 && this.setState({ count: this.state.count - 1 });
	};

	id = null;

	start = () => {
		this.id = setInterval(() => {
			if (this.state.count !== 0) {
				this.setState({ count: this.state.count - 1 }, () => {
					if (this.state.count === 0) {
						alert("Timer finished");
						clearInterval(this.id);
						this.id = null;
					}
				});
			}
		}, 1000);
	};

	reset = () => {
		this.setState({ count: 0 });
		clearInterval(this.id);
		this.id = null;
	};

	pause = () => {
		clearInterval(this.id);
	};

	render() {
		return (
			<div>
				<h1>Timer Application</h1>
				<input type="number" value={this.state.count} readOnly />
				<button onClick={this.incrementCount}>Inc</button>
				<button onClick={this.decrementCount}>Dec</button>
				<button onClick={this.start}>Start</button>
				<button onClick={this.reset}>Reset</button>
				<button onClick={this.pause}>Pause</button>
			</div>
		);
	}
}

export default Timer;
