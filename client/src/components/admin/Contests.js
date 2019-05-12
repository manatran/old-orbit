import React, { Component } from 'react';
import { connect } from "react-redux";
import ContestsList from '../contests/ContestsList';
import { apiUrl } from "../../env";

class Contests extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			error: "",
			title: "",
			description: "",
			from: "",
			til: "",
			contests: null
		}
		this.state.contests = this.props.contests;
	}

	createContest = (e) => {
		e.preventDefault();
		const { title, description, from, til } = this.state;
		const { auth } = this.props;

		const body = {
			title: title,
			description: description,
			from: from,
			til: til
		}

		console.log(body);
		if (title && description && from && til && (from < til)) {
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
					if (!contest.error){
						this.setState({ contests: [contest, ...this.state.contests] });
						this.setState({ title: "" });
						this.setState({ description: "" });
						this.setState({ from: "" });
						this.setState({ til: "" });
						this.setState({ showForm: false })
					} else {
						this.setState({ error: contest.error});
					}
				})
				.catch(error => {
					this.setState({ error });
				})

		} else {
			this.setState({ error: "Please fill in all the fields correctly."})
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
							<p className="error">{this.state.error}</p>
							<input
								type="text"
								value={this.state.title}
								onChange={e => {
									this.setState({ title: e.target.value });
								}}
								placeholder="Contest title"
							/>
							<textarea
								type="description"
								value={this.state.description}
								onChange={e => {
									this.setState({ description: e.target.value });
								}}
								placeholder="Contest description"
							/>

							<div className="small-inputs">
								<div className="input">
									<h5>Startdate</h5>
									<input
										type="date"
										value={this.state.from}
										onChange={e => {
											this.setState({ from: e.target.value });
										}}
										placeholder="Contest start date"
									/>
								</div>
								<div className="input">
									<h5>Enddate</h5>
									<input
										type="date"
										value={this.state.til}
										onChange={e => {
											this.setState({ til: e.target.value });
										}}
										placeholder="Contest end date"
									/>
								</div>
							</div>

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
