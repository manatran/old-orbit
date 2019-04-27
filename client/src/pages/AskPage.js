import React, { Component } from "react";
import { connect } from "react-redux";
import Ask from "../components/ask";
import Sidebar from "../components/ask/Sidebar";
import Research from "../components/ask/Research";

class Askpage extends Component {
	constructor(props) {
		super(props);
		if (!this.props.auth.authenticated) {
			this.props.history.push("/signup");
			return true;
		}

	}

	render() {
		return (
			<div className="body spaced">
				<Sidebar />
				<main>
					<Research />
					<Ask history={this.props.history} token={this.props.auth.token} />
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Askpage);
