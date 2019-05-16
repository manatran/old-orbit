import React, { Component } from 'react';
import { connect } from "react-redux";
import { apiUrl } from "../../env";

class Delete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			success: ""
		}
	}

	deleteItem = () => {
		const { id, type, auth } = this.props;

		fetch(`${apiUrl}/api/v1/${type}s/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: auth.token,
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(() => {
				this.setState({ success: `Successfully deleted ${type}` });
				window.setTimeout(() => {
					window.location.reload()
				}, 500);
			}).catch(err => {
				console.log(err);
			});
	}

	render() {
		if (!this.state.success) {
			return (
				<div>
					<h2>Delete this {this.props.type}</h2>
					<p>Are you sure you want to delete this {this.props.type}? You cannot undo this!</p>
					<div className="button-container">
						<button
							className="button small"
							onClick={this.props.closeModal}
						>Cancel</button>
						<button
							className="button light danger small"
							onClick={this.deleteItem}
						>Delete {this.props.type}</button>
					</div>
				</div>
			)
		} else {
			return <p className="success">{this.state.success}</p>
		}
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Delete);
