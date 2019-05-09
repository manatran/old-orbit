import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "../../dist/simplemde.css";
import { apiUrl } from "../../env";

class Ask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			title: "",
			content: "",
			subject: null,
			error: ""
		};
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { title, content, subject } = this.state;
		if (!title || !content || !subject) {
			this.setState({ error: "Please fill in all the fields" });
			return true;
		}

		const body = {
			title: title,
			content: content,
			subject: subject
		};

		console.log(body)

		fetch(`${apiUrl}/api/v1/posts`, {
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
				if (!res.error) {
					this.setState({ error: "" });
					this.props.history.push(`/questions/${res.id}`)
					return true;
				}
				this.setState({ error: JSON.stringify(res.error) });
			})
			.catch(err => {
				this.setState({ error: err.error });
			});
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/categories`)
			.then(res => res.json())
			.then(categories => {
				this.setState({ categories });
			})
			.catch(err => {
				this.setState({ error: err });
			});
	}

	render() {
		const { categories } = this.state;
		return (
			<section className="ask">
				<h2>Ask your question</h2>

				{this.state.error && <p className="error">{this.state.error}</p>}

				<form onSubmit={this.onSubmit}>
					<select
						onChange={e => this.setState({ subject: e.target.value })}
					>
						<option hidden>Choose a community</option>
						{categories.map(el => (
							<option key={el.id} value={el.id}>{el.name}</option>
						))}
					</select>

					<input
						type="text"
						value={this.state.title}
						onChange={e => this.setState({ title: e.target.value })}
						placeholder="Your specific question"
					/>
					<p className="light">Enter 2 line breaks for a new paragraph.</p>
					<SimpleMDE
						options={{
							placeholder: "Provide some details and show your research"
						}}
						onChange={val => this.setState({ content: val })}
					/>
					<button className="button">Submit question</button>
				</form>
			</section>
		);
	}
}

export default Ask;
