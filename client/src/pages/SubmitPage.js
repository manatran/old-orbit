import React, { Component } from "react";
import { connect } from "react-redux";
import Submit from "./../components/submit";
import Sidebar from "./../components/ask/Sidebar";

class SubmitPage extends Component {
	constructor(props) {
		super(props)
		if (!this.props.auth.authenticated) {
			this.props.history.push("/signup");
			return true;
		}
	}

	render() {
		return (
			<div className="body spaced">
				<Sidebar submit />
				<Submit token={this.props.auth.token} history={this.props.history} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(SubmitPage);
