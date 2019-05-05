import React, { Component } from 'react';
import { connect } from "react-redux";
import Spinner from "../spinner";

import { apiUrl } from "../../env"

class Reports extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: null
		}
	}

	componentDidMount() {
		const { auth } = this.props;

		fetch(`${apiUrl}/api/v1/reports`, {
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			},
		})
			.then(res => res.json())
			.then(reports => {
				this.setState({ reports });
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		const { reports } = this.state;

		if (reports) {
			return (
				<div>
					{this.state.reports.length > 0 ? (
						this.state.reports.map((el, i) => (
							<p>Hello</p>
						))
					) : (
							<p className="light">All clear, no reports!</p>
						)}
				</div>
			);
		} else {
			return <Spinner size={32} />;
		}
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Reports);
