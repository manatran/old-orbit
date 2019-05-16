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
			month: "",
			year: "",
			contests: null,
			currYear: 0
		}
		this.state.currYear = new Date().getFullYear();
		this.state.contests = this.props.contests;
	}

	createContest = (e) => {
		e.preventDefault();
		const { title, description, month, year } = this.state;
		const { auth } = this.props;

		const body = {
			title: title,
			description: description,
			month: month,
			year: year
		}

		if (title && description && month && year) {
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
					if (!contest.error) {
						this.setState({ contests: [contest, ...this.state.contests] });
						this.setState({ title: "" });
						this.setState({ description: "" });
						this.setState({ month: "" });
						this.setState({ year: "" });
						this.setState({ showForm: false })
					} else {
						this.setState({ error: contest.error });
					}
				})
				.catch(error => {
					this.setState({ error });
				})

		} else {
			this.setState({ error: "Please fill in all the fields correctly." })
		}

	}

	render() {
		const { showForm, contests, currYear } = this.state;

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
									<select
										onChange={e => this.setState({ month: e.target.value })}
									>
										<option hidden>Month</option>
										<option value="jan">January</option>
										<option value="feb">February</option>
										<option value="mar">March</option>
										<option value="apr">April</option>
										<option value="may">May</option>
										<option value="jun">June</option>
										<option value="jul">July</option>
										<option value="sep">September</option>
										<option value="oct">October</option>
										<option value="nov">November</option>
										<option value="dec">December</option>
									</select>
								</div>
								<div className="input">
									<select
										onChange={e => this.setState({ year: e.target.value })}
									>
										<option hidden>Year</option>
										<option value={currYear}>{currYear}</option>
										<option value={currYear + 1}>{currYear + 1}</option>
										<option value={currYear + 2}>{currYear + 2}</option>
										<option value={currYear + 3}>{currYear + 3}</option>
										<option value={currYear + 4}>{currYear + 4}</option>
										<option value={currYear + 5}>{currYear + 5}</option>
									</select>
								</div>
							</div>

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
