import React, { Component } from 'react';

import Header from "../components/subject/Header";
import QuestionsList from '../components/questions/QuestionsList';
import Sidebar from '../components/sidebar';
import ScrollTop from '../components/questions/ScrollTop';

import { apiUrl } from "../env";

class SubjectPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: null,
			questions: null,
			slug: ''
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.slug !== prevProps.match.params.slug) {
			this.fetchCategory();
		}
	}


	componentDidMount() {
		this.setState({ slug: this.props.match.params.slug })
		this.fetchCategory();
	}

	fetchCategory() {
		const { slug } = this.props.match.params;

		fetch(`${apiUrl}/api/v1/categories/${slug}`)
			.then(res => res.json())
			.then(subject => {
				this.setState({ subject });
				this.setState({ loading: false });
			})
			.catch(err => {
				this.setState({ loading: false });
				this.props.history.push('/');
			})

		fetch(`${apiUrl}/api/v1/category/posts/${slug}`)
			.then(res => res.json())
			.then(questions => {
				this.setState({ questions });
			})
			.catch(err => {
				this.setState({ loading: false });
			})
	}

	render() {
		const { subject, questions } = this.state;
		return (
			<div>
				{subject ? (
					<>
						<Header subject={subject} />
						<div className="body">
							<Sidebar />
							<main>
								{questions
									? (
										<>
											<QuestionsList questions={questions} />
											<ScrollTop />
										</>
									) : (
										<p className="light">This category has no posts yet. Feel free to ask some!</p>
									)}
							</main>
						</div>
					</>
				) : null}
			</div>
		)
	}
}
export default SubjectPage;
