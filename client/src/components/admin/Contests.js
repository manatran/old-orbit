import React, { Component } from 'react'
import ContestsList from '../contests/ContestsList';

class Contests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			name: ""
		}
	}

	createContest = (e) => {
		e.preventDefault();
		const { name } = this.state;
		const body = {
			name: name,
		}
		console.log(body);
	}

	render() {
		const { showForm } = this.state;
		const { contests } = this.props;
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

export default Contests;
