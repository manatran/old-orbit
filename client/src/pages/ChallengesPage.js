import React, { Component } from "react";
import SubmissionsList from "../components/submissions/SubmissionsList";
import Sidebar from "../components/sidebar";

import { apiUrl } from "../env";

class SubmissionsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submissions: null
		}
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/submissions`)
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
		const { submissions } = this.state;
    return (
      <div className="body spaced">
        <Sidebar />
				<main>
					<SubmissionsList submissions={submissions} />
				</main>
      </div>
    );
  }
}

export default SubmissionsPage;
