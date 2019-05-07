import React, { Component } from "react";
import { connect } from "react-redux";

import ReportsList from "../components/reports/ReportsList";
import Categories from "../components/admin/Categories";
import Contests from "../components/admin/Contests";

import { apiUrl } from "../env";

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: "reports",
			reports: null,
			categories: null,
			contests: null,
		}

		if (!this.props.auth.user.profile.isAdmin) {
			this.props.history.push("/");
		}
	}

	componentDidMount() {
		const { auth } = this.props;

		fetch(`${apiUrl}/api/v1/reports`, {
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(reports => {
				if (!reports.error) this.setState({ reports });
			}).catch(err => {
				console.log(err)
			})

		fetch(`${apiUrl}/api/v1/categories`)
			.then(res => res.json())
			.then(categories => {
				if (!categories.error) this.setState({ categories });
			}).catch(err => {
				console.log(err)
			})

		fetch(`${apiUrl}/api/v1/challenges`)
			.then(res => res.json())
			.then(contests => {
				if (!contests.error) this.setState({ contests });
			})
			.catch(err => {
				console.log(err);
			})
	}

	setActiveTab(tab) {
		this.setState({ tab })
	}

	renderContent() {
		const { tab, reports, categories, contests } = this.state;
		switch (tab) {
			case "categories":
				return <Categories categories={categories} />;
			case "contests":
				return <Contests contests={contests} />;
			case "reports":
			default:
				return <ReportsList reports={reports} />
		}
	}

	render() {
		const { tab } = this.state;
		return (
			<div className="body spaced">
				<aside>
					<div className="vertical-tabs">
						<button
							className={tab === "reports" ? 'active' : null}
							onClick={() => this.setActiveTab("reports")}
						>
							Reports
						</button>
						<button
							className={tab === "categories" ? 'active' : null}
							onClick={() => this.setActiveTab("categories")}
						>
							Categories
						</button>
						<button
							className={tab === "contests" ? 'active' : null}
							onClick={() => this.setActiveTab("contests")}
						>
							Contests
						</button>
					</div>
				</aside>
				<main>
					{this.renderContent()}
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(DashboardPage);
