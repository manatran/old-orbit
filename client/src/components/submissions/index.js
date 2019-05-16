import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './submissions.css';

class Submission extends Component {
	render() {
		return (
			<Link to={`/submissions/${this.props.id}`} className="submission">
				<div className="background" style={{ backgroundImage: `url(${this.props.background})` }} />
				<div className="meta">
					<h2>{this.props.title}</h2>
					<p>{this.props.subtitle}</p>
				</div>
			</Link>
		);
	}
}

export default Submission;
