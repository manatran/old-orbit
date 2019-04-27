import React, { Component } from "react";
import { connect } from "react-redux";

import Reports from "../components/admin/Reports";
import Categories from "../components/admin/Categories";

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: "reports"
		}
		if (!this.props.auth.user.profile.isAdmin) {
			this.props.history.push("/");
		}
	}

	setActiveTab(tab) {
		this.setState({ tab })
	}

	renderContent() {
		const { tab } = this.state;
		if (tab === "categories") {
			return <Categories />
		} else {
			return <Reports />
		}
	}

	render() {
		const { tab } = this.state;
		return (
			<div className="body spaced">
				<aside>
					<div className="vertical-tabs">
						<button className={tab === "reports" ? 'active' : null} onClick={() => this.setActiveTab("reports")}>Reports</button>
						<button className={tab === "categories" ? 'active' : null} onClick={() => this.setActiveTab("categories")}>Categories</button>
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
