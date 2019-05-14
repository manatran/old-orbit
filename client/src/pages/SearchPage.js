import React, { Component } from 'react';
import Sidebar from "../components/sidebar";
import Spinner from "../components/spinner";
import SubmissionsList from "../components/submissions/SubmissionsList";
import QuestionsList from "../components/questions/QuestionsList";
import { apiUrl } from "../env";

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: null,
			q: ""
		}
	}

	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const q = urlParams.get('q');
		this.setState({ q })

		fetch(`${apiUrl}/api/v1/search/${q}`)
			.then(res => res.json())
			.then(results => {
				this.setState({ results });
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		const { results, q } = this.state;
		return (
			results ? (
				<div className="body spaced">
					<Sidebar />
					<main>
						<section>
							<h2>Submission results for <i>{q}</i></h2>
							<SubmissionsList submissions={results.submissions} />
						</section>

						<section style={{marginTop: '32px'}}>
							<h2>Question results for <i>{q}</i></h2>
							<QuestionsList questions={results.posts} />
						</section>
					</main>
				</div>
			)
			: (
				<div className="body spaced">
					<Spinner />
				</div>
			)
		)
	}
}

export default SearchPage;
