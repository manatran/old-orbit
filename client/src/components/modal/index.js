import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { apiUrl } from "../../env";
import "./modal.css";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			report: false,
			description: "",
			error: "",
			success: ""
		}
		this.state.postId = this.props.question.id;
	}

	onSubmit = (e) => {
		e.preventDefault();

		const { description, postId } = this.state;
		if (description && postId) {
			const body = {
				content: description,
				postId
			}
			fetch(`${apiUrl}/api/v1/reports`, {
				method: "POST",
				headers: {
					Authorization: this.props.auth.token,
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(body)
			})
				.then(res => res.json())
				.then(report => {
					console.log(report);
					this.setState({ description: "" });
					this.setState({ error: "" });
					this.setState({ success: "Successfully created report." });
				})
		} else {
			this.setState({ error: "Something went wrong. Please fill in the fields." })
		}
	}

	render() {
		return (
			<div className="modal-container">
				<div className="backdrop">
					<div className="modal">
						<h2 className="close">
							Report
							<span onClick={() => this.props.closeModal()}>
								<i className="material-icons">close</i>
							</span>
						</h2>
						<div>
							<h4>Please state your reason for reporting this post.</h4>
							<form onSubmit={this.onSubmit}>
								{this.state.error && <p className="error">{this.state.error}</p>}
								{this.state.success && <p className="success">{this.state.success}</p>}
								<textarea value={this.state.description} rows="5" onChange={e => this.setState({ description: e.target.value })}></textarea>
								<div className="button-container">
									<button className="button small" type="submit">Submit</button>
									<button className="button light small" onClick={e => {
										e.preventDefault();
										this.props.closeModal();
									}}>Cancel</button>
								</div>
							</form>
							<p>Please make sure you have read our <Link to="/terms">terms and community guidelines.</Link> before reporting.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Modal);
