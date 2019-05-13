import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../../env";
import { capitalizeFirstLetter } from "../../helpers";
import "./header.css";

class SmallHeader extends Component {
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
				<Link to="/challenges/current" className="small-header">
					<div className="title">
						<h2>This month's challenge</h2>
						<h3>{challenge.title}</h3>
					</div>
					<div className="description">
						<h3>{`${capitalizeFirstLetter(challenge.month)} ${challenge.year}`}</h3>
					</div>
				</Link>
			)
			: null
    );
  }
}

export default SmallHeader;
