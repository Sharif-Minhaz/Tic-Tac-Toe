import React, { Component } from "react";
import classes from "../app.module.css";

class Input extends Component {
	state = {
		name: "",
		country: "",
		bio: "",
		birthday: "",
		gender: "",
		agree: false,
		skills: [],
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleCheckBox = (event) => {
		this.setState({ agree: event.target.checked });
	};

	handleSkills = (event) => {
		if (event.target.checked) {
			this.setState({ skills: [...this.state.skills, event.target.value] });
		} else {
			const skills = this.state.skills.filter((skill) => skill !== event.target.value);
			this.setState({ skills });
		}
	};

	render() {
		const { name, country, bio, birthday, agree, skills } = this.state;
		return (
			<div className={`${classes.mainDiv} d-flex flex-column p-3`}>
				<h2>Working with form</h2>
				<input
					className="my-2 form-control"
					type="text"
					name="name"
					placeholder="Enter your name"
					value={name}
					onChange={this.handleChange}
				/>
				<select
					className="my-2 form-control"
					name="country"
					value={country}
					onChange={this.handleChange}
				>
					<option>Select country</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="China">China</option>
					<option value="Canada">Canada</option>
					<option value="Sri-Lanka">Sri-Lanka</option>
				</select>
				<textarea
					className="my-2 form-control"
					name="bio"
					id=""
					placeholder="Enter your bio"
					value={bio}
					onChange={this.handleChange}
				></textarea>
				<input
					className="my-2 form-control"
					type="date"
					name="birthday"
					value={birthday}
					onChange={this.handleChange}
				/>
				<div>
					<label htmlFor="male">Male</label>
					<input
						type="radio"
						name="gender"
						value="male"
						id="male"
						onChange={this.handleChange}
						className="ms-2 me-3"
					/>
					<label htmlFor="female">female</label>
					<input
						type="radio"
						name="gender"
						value="female"
						id="female"
						onChange={this.handleChange}
						className="ms-2 me-3"
					/>
					<label htmlFor="other">Other</label>
					<input
						type="radio"
						name="gender"
						value="other"
						id="other"
						onChange={this.handleChange}
						className="ms-2 me-3"
					/>
				</div>
				<div>
					<h4>Add skills</h4>
					<label htmlFor="java">Java</label>
					<input
						type="checkbox"
						name="skills"
						id="java"
						value="java"
						className="ms-2 me-3"
						onChange={this.handleSkills}
						checked={skills.includes("java")}
					/>
					<label htmlFor="javascript">Javascript</label>
					<input
						type="checkbox"
						name="skills"
						id="javascript"
						value="javascript"
						className="ms-2 me-3"
						onChange={this.handleSkills}
						checked={skills.includes("javascript")}
					/>
					<label htmlFor="python">Python</label>
					<input
						type="checkbox"
						name="skills"
						id="python"
						value="python"
						className="ms-2 me-3"
						onChange={this.handleSkills}
						checked={skills.includes("python")}
					/>
				</div>
				<div>
					<input
						id="agreement"
						name="agree"
						type="checkbox"
						checked={agree}
						onChange={this.handleCheckBox}
					/>
					<label htmlFor="agreement" className="ms-2">
						Agree with the all term and conditions
					</label>
				</div>
				<button className="btn btn-primary" onClick={() => console.log(this.state)}>
					Show Data
				</button>
			</div>
		);
	}
}

export default Input;
