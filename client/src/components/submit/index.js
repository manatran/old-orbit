import React, { Component } from "react";
import SmallHeader from "./../headers/SmallHeader";
import Github from "./../../assets/icons/github.png";
import SimpleMDE from "react-simplemde-editor";
import "../../dist/simplemde.css";
import "./submit.css";
import { apiUrl } from "../../env";

class Submit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			content: "",
			ghurl: "",
			thumbnail: "",
			contestId: "",
			error: ""
		};
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/challenges/current`)
			.then(res => res.json())
			.then(challenge => {
				if(!challenge.error) {
					this.setState({ contestId: challenge.id })
				}
			})
			.catch(err => {
				this.setState({ error: err.error });
			});
	}

	onSubmit(e) {
		e.preventDefault();

		const { title, content, ghurl, thumbnail, contestId } = this.state;
		if (!title || !content || !ghurl || !thumbnail) {
			this.setState({ error: "Please fill in all the fields" });
			return true;
		}

		const body = {
			title: title,
			content: content,
			githubUrl: ghurl,
			thumbnail: thumbnail,
			contestId: contestId
		};

		fetch(`${apiUrl}/api/v1/submissions`, {
			method: "POST",
			headers: {
				Authorization: this.props.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(res => res.json())
			.then(res => {
				this.setState({ error: "" });
				this.props.history.push(`/questions/${res.id}`)
			})
			.catch(err => {
				this.setState({ error: err.error });
			});
	}

	render() {
		return (
			<main className="submit">
				<SmallHeader />
				<h2>Submit your creation</h2>
				{this.state.error ? <p className="error">{this.state.error}</p> : null}
				<form onSubmit={this.onSubmit.bind(this)}>
					<input
						type="text"
						placeholder="Title"
						value={this.state.title}
						onChange={e => {
							this.setState({ title: e.target.value });
						}}
					/>
					<div className="image-input">
						{this.state.thumbnail ? (
							<div
								className="thumbnail"
								style={{ backgroundImage: `url(${this.state.thumbnail})` }}
							/>
						) : null}
						<input
							type="text"
							placeholder="Thumbnail URL"
							value={this.state.thumbnail}
							onChange={e => {
								this.setState({ thumbnail: e.target.value });
							}}
						/>
					</div>
					<div className="icon-input">
						<img src={Github} alt="Github logo" />
						<input
							type="text"
							placeholder="GitHub URL"
							value={this.state.ghurl}
							onChange={e => {
								this.setState({ ghurl: e.target.value });
							}}
						/>
					</div>

					<SimpleMDE
						options={{
							placeholder: "Provide some details and show your work"
						}}
						onChange={val => {
							this.setState({ content: val });
						}}
					/>
					<button className="button">Submit creation</button>
				</form>
			</main>
		);
	}
}

export default Submit;
