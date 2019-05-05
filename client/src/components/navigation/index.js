import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import Searchbar from "./Searchbar";
import "./nav.css";

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdown: false
		};
	}

	componentDidUpdate(prevProps) {
		// if (this.props.match.params.slug !== prevProps.match.params.slug) {
		// 	this.setState({ dropdown: false });
		// }
	}

	render() {
		return (
			<nav>
				<div className="nav-container container">
					<div className="column">
						<Link to="/" className="logo">
							<img src={logo} alt="Orbit" />
							<span>Orbit</span>
						</Link>

						<div className="nav-links">
							<Link to="/challenges">Code challenges</Link>
							<Link to="/suggestions">Challenge suggestions</Link>
							<Link to="/questions">Question forum</Link>
							{this.props.auth.user.profile && this.props.auth.user.profile.isAdmin ? (
								<Link to="/dashboard" className="admin-link">
									Dashboard
                </Link>
							) : null}
						</div>
					</div>

					<div className="column">
						<Searchbar />
						{this.props.auth.authenticated ? (
							<span
								className={
									this.state.dropdown ? "logged-in active" : "logged-in"
								}
							>
								<div
									className="personal-info"
									onClick={() => {
										this.setState({ dropdown: !this.state.dropdown });
									}}
								>
									<span className="meta">
										<h2>{this.props.auth.user.login}</h2>
										<h3>{this.props.auth.user.profile.reputation} rep</h3>
									</span>
									<img src={this.props.auth.user.avatar_url} alt="User" />
									<i className="material-icons">arrow_drop_down</i>
								</div>

								{this.state.dropdown ? (
									<div className="dropdown">
										<h2>Options</h2>
										<Link to={`/user/${this.props.auth.user.login}`}>
											<i className="material-icons">account_circle</i>Profile
                    </Link>

										<div className="links">
											<Link to="/ask">Ask a question</Link>
											<Link to="/submit">Submit a challenge</Link>
										</div>

										<div className="alt-links links">
											<Link to="/challenges">Code challenges</Link>
											<Link to="/suggestions">Challenge suggestions</Link>
											<Link to="/questions">Question forum</Link>
											{this.props.auth.user.profile && this.props.auth.user.profile.isAdmin ? (
												<Link to="/dashboard" className="admin-link">
													Dashboard
                        </Link>
											) : null}
										</div>

										<div className="links">
											<Link to="/privacy">Privacy policy</Link>
											<Link to="/terms">Terms of use</Link>
										</div>

										<Link to="/logout">
											<i className="material-icons">exit_to_app</i>Log out
                    </Link>
									</div>
								) : null}
							</span>
						) : (
								<Link to="/signup" className="button light">
									Sign up
              </Link>
							)}
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Navigation);
