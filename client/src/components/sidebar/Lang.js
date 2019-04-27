import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './sidebar.css';

class Lang extends Component {

	render() {
		return (
			<Link to={this.props.url} className={`lang ${this.props.big ? "big" : null}`}>
				<img src={this.props.icon} alt="logo" />
				<div className="meta">
					<p>{this.props.title}</p>
					{this.props.big && this.props.description && (
						<p className="description">{this.props.description}</p>
					)}
					<p className="subs">{this.props.subs} subscribers</p>
				</div>
			</Link>
		);
	}
}

export default Lang;
