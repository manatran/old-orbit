import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../env";
import { capitalizeFirstLetter } from "../../helpers";

class LoggedInHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			challenge: null,
		}
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/challenges/current`)
			.then(res => res.json())
			.then(challenge => {
				if(!challenge.error) {
					this.setState({ challenge });
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		const { challenge } = this.state;
    return (
			challenge ? (
				<Link to="/challenges/current" className="big-header logged-in">
					<div className="container">
						<div className="intro">
							<h1>This month's challenge</h1>
							<h3>{`${capitalizeFirstLetter(challenge.month)} ${challenge.year}`}</h3>
						</div>
						<div className="info">
							<h2>{challenge.title}</h2>
							<p>{challenge.description}</p>
							<p>Be creative and have fun!</p>
						</div>
					</div>
				</Link>
			)
			: (
				<div className="body spaced" />
			)
    );
  }
}

export default LoggedInHeader;
