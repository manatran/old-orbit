import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./subject.css";

export default class SubjectHeader extends Component {
	render() {
		const { subject } = this.props;
		return (
			<Link className="subject-header" to={`/subject/${subject.slug}`}>
				<div className="container">
					<img src={subject.thumbnail} alt={subject.title} />
					<div className="info">
						<p className="title">{subject.name}</p>
						<p>{subject.description}</p>
					</div>
				</div>
			</Link>
		)
	}
}
