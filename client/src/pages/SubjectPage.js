import React, { Component } from 'react';
import Header from "../components/subject/Header";

import { apiUrl } from "../env";

class SubjectPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: null
		}
	}

	componentDidMount() {
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
	}

	render() {
		const { subject } = this.state;
		return (
			<div>
				{subject ? (
					<Header subject={subject} />
				) : null}
			</div>
		)
	}
}
export default SubjectPage;
