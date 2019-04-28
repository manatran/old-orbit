import React, { Component } from "react";
import Question from "./index";
import "./questions.css";

class QuestionsList extends Component {
	render() {
		const { questions } = this.props;
		return (
			questions.map(el => (
				<Question
					key={el.id}
					id={el.id}
					title={el.title}
					thumbnail={el.subject.thumbnail}
					likes={el.totalLikes || 0}
					category={el.subject.name}
					author={el.author.username}
					timestamp={el.createdAt}
				/>
			))
		)
	}
}

export default QuestionsList;
