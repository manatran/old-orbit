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
								<i className="material-icons admin">verified_user</i>
								{this.props.author}
							</span>
						</span>
					</p>
				</Link>

				<div className="options">
					<Link to="/" className="comments">
						{this.props.comments}
						<i className="material-icons">comments</i>
					</Link>
					<span
						onClick={() => {
							this.setState({ dropdown: !this.state.dropdown });
						}}
						className="more"
					>
						<i className="material-icons">more_horiz</i>
					</span>

					{this.state.dropdown ? (
						<div className="dropdown-container">
							<div
								className="backdrop"
								onClick={() => {
									this.setState({ dropdown: false });
								}}
							>
								<div className="dropdown">
									<h2 className="close">
										Options
                    <i
											onClick={() => {
												this.setState({ dropdown: false });
											}}
											className="material-icons"
										>
											close
                    </i>
									</h2>
									<ul>
										<li>
											<Link to="/">
												<i className="material-icons">timeline</i>
												More from {this.props.category}
											</Link>
										</li>
										<li>
											<Link to={`/user/${this.props.author}`}>
												<i className="material-icons">account_circle</i>
												{this.props.author}'s profile
                      </Link>
										</li>
										<li>
											<Link
												to="/"
												className="disabled"
												onClick={e => {
													e.preventDefault();
												}}
											>
												<i className="material-icons">report</i>
												Report post
                      </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default Question;
