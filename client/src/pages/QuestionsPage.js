import React, { Component } from "react";
import QuestionsList from "../components/questions/QuestionsList";
import Sidebar from "../components/sidebar";

import { apiUrl } from "../env";

class QuestionsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: null
		}
	}

	componentDidMount() {
		fetch(`${apiUrl}/api/v1/posts`)
			.then(res => res.json())
			.then(questions => {
				if(!questions.error) {
					this.setState({ questions });
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		const { questions } = this.state;
    return (
      <div className="body spaced">
        <Sidebar />
				<main>
					<QuestionsList questions={questions} />
				</main>
      </div>
    );
  }
}

export default QuestionsPage;
