import React, { Component } from "react";
import SubmissionsList from "../components/submissions/SubmissionsList";
import LoggedInHeader from "../components/headers/LoggedInHeader";
import Sidebar from "../components/sidebar";

import { apiUrl } from "../env";

class SubmissionsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submissions: null,
			currYear: 0,
			year: 0,
			month: '',
		}
		const months = ['jan', 'feb', 'mar', 'apr','may','jun','jul','aug','sep','oct','nov','dec'];
		this.state.currYear = new Date().getFullYear();
		this.state.year = this.state.currYear;
		this.state.month = months[new Date().getMonth()];
	}

	componentDidMount() {
		this.fetchSubmissions();
	}

	componentDidUpdate(prevProps, prevState) {
		const { year, month } = this.state;

		if(prevState.month !== month || prevState.year.toString() !== year.toString()) {
			this.fetchSubmissions();
		}
	}

	fetchSubmissions = () => {
		const { year, month } = this.state;

		fetch(`${apiUrl}/api/v1/submission/${year}/${month}`)
			.then(res => res.json())
			.then(submissions => {
				if(!submissions.error) {
					this.setState({ submissions });
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		const { submissions, currYear, year, month } = this.state;
    return (
			<>
				<LoggedInHeader />
				<div className="body">
					<Sidebar />
					<main>
						<div className="submission-container">
							<SubmissionsList submissions={submissions} />
						</div>
					</main>
					<aside className="filter">
						<form>
							<select
								value={year}
								onChange={e => this.setState({ year: e.target.value })}
							>
								<option hidden>Year</option>
								<option value={currYear - 3}>{currYear - 3}</option>
								<option value={currYear - 2}>{currYear - 2}</option>
								<option value={currYear - 1}>{currYear - 1}</option>
								<option value={currYear}>{currYear}</option>
							</select>

							<div className="vertical-tabs">
								<button type="button"
									className={month === "jan" ? 'active' : null}
									onClick={() => this.setState({ month: 'jan'})}
								>
									January
								</button>
								<button type="button"
									className={month === "feb" ? 'active' : null}
									onClick={() => this.setState({ month: 'feb'})}
								>
									February
								</button>
								<button type="button"
									className={month === "mar" ? 'active' : null}
									onClick={() => this.setState({ month: 'mar'})}
								>
									March
								</button>
								<button type="button"
									className={month === "apr" ? 'active' : null}
									onClick={() => this.setState({ month: 'apr'})}
								>
									April
								</button>
								<button type="button"
									className={month === "may" ? 'active' : null}
									onClick={() => this.setState({ month: 'may'})}
								>
									May
								</button>
								<button type="button"
									className={month === "jun" ? 'active' : null}
									onClick={() => this.setState({ month: 'jun'})}
								>
									June
								</button>
								<button type="button"
									className={month === "jul" ? 'active' : null}
									onClick={() => this.setState({ month: 'jul'})}
								>
									July
								</button>
								<button type="button"
									className={month === "aug" ? 'active' : null}
									onClick={() => this.setState({ month: 'aug'})}
								>
									Augustus
								</button>
								<button type="button"
									className={month === "sep" ? 'active' : null}
									onClick={() => this.setState({ month: 'sep'})}
								>
									September
								</button>
								<button type="button"
									className={month === "oct" ? 'active' : null}
									onClick={() => this.setState({ month: 'oct'})}
								>
									October
								</button>
								<button type="button"
									className={month === "nov" ? 'active' : null}
									onClick={() => this.setState({ month: 'nov'})}
								>
									November
								</button>
								<button type="button"
									className={month === "dec" ? 'active' : null}
									onClick={() => this.setState({ month: 'dec'})}
								>
									December
								</button>
							</div>
						</form>
					</aside>
				</div>
			</>
    );
  }
}

export default SubmissionsPage;
