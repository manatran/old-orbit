import React, { Component } from 'react';
import { connect } from "react-redux";
import ContestsList from '../contests/ContestsList';
import { apiUrl } from "../../env";

class Contests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			name: "",
			description: "",
			from: "",
			til: "",
			contests: null
		}
		this.state.contests = this.props.contests;
	}

	createContest = (e) => {
		e.preventDefault();
		const { name, description, from, til } = this.state;
		const { auth } = this.props;

		const body = {
			name: name,
			description: description,
			from: from,
			til: til
		}

		if (name && description && from && til) {
			fetch(`${apiUrl}/api/v1/challenges`, {
				method: "POST",
				headers: {
					Authorization: auth.token,
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			})
				.then(res => res.json())
				.then(contest => {
					if (!contest.error) this.setState({ contests: [contest, ...this.state.contests] });
				})
				.catch(err => {
					console.log(err);
				})

		}

	}

	render() {
		const { showForm, contests } = this.state;

		return (
			<div>
				{showForm && (
					<>
						<h2>Create contest</h2>
						<form onSubmit={this.createContest}>
							<input
								type="text"
								value={this.state.name}
								onChange={e => {
									this.setState({ name: e.target.value });
								}}
								placeholder="Contest name"
							/>
							{/* TODO: add form inputs */}
							<button className="button" type="submit">
								Submit contest
							</button>
						</form>
					</>
				)}
				<button
					className={showForm ? `button light` : `button`}
					onClick={e => this.setState({ showForm: !this.state.showForm })}
				>
					{showForm ? `Cancel` : `Create contest`}
				</button>
				<h2>Manage contests</h2>
				<ContestsList contests={contests} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Contests);
