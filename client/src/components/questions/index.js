import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../helpers";
import "./questions.css";

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false
		};
	}

	render() {
		return (
			<div className="question">
				<div className="votes">
					<i className="material-icons up">arrow_drop_up</i>
					<span>{this.props.likes}</span>
					<i className="material-icons down">arrow_drop_down</i>
				</div>

				<img src={this.props.thumbnail} alt={this.props.category} />

				<Link to={`/questions/${this.props.id}`} className="question-body">
					<h2>
						{this.props.title}{" "}
						{this.props.tag ? (
							<span className="tag">{this.props.tag}</span>
						) : null}
					</h2>
					<p className="light">
						<span className="category">
							<img src={this.props.thumbnail} alt={this.props.category} />
							{this.props.category}
						</span>
						<span className="meta">
							Asked{" "}
							<span className="time" title={this.props.timestamp}>
								{getTimeDifference(this.props.timestamp)}
							</span>{" "}
							by
              <span className="author">
								{this.props.author.isAdmin && <i className="material-icons admin">verified_user</i>}
								{this.props.author.username}
							</span>
						</span>
					</p>
				</Link>
			</div>
		);
	}
}

export default Question;
