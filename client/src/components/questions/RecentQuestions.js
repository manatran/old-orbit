import React, { Component } from "react";
import Question from "./index";
import ScrollTop from "./ScrollTop";
import Spinner from "../spinner";
import "./questions.css";
import { apiUrl } from "../../env";

class RecentQuestions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			loading: true,
		};
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/posts/recent`)
			.then(res => res.json())
			.then(res => {
				this.setState({ loading: false })
				this.setState({ questions: res });
			})
			.catch(err => {
				this.setState({ loading: false })
				console.error(err);
			});
	}

	renderQuestions(questions) {
		return (
			questions.map(el => (
				<Question
					key={el.id}
					id={el.id}
					title={el.title}
					thumbnail={el.subject.thumbnail}
					category={el.subject.name}
					author={el.author.username}
					timestamp={el.createdAt}
				/>
			))
		)
	}

	render() {
		const { loading, questions } = this.state;
		return (
			<section className="questions" style={{ marginTop: "32px" }}>
				<h2>Recent questions</h2>
				{loading
					? (
						<div
							className="spinner-container"
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "16px"
							}}
						>
							<Spinner size="24" />
						</div>
					)
					: (
						<>
							{this.renderQuestions(questions)}
							<ScrollTop />
						</>
					)

				}
			</section>
		)
	}
}

export default RecentQuestions;
