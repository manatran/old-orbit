import React, { Component } from 'react';
import Spinner from "../spinner";

class ContestsList extends Component {

	render() {
		const { contests } = this.props;
		if (contests) {
			return (
				contests.length ? (
					contests.map((el, i) => (
						<div key={el.id}>
							<p>{el.title}</p>
						</div>
					))

				) : (
						<p className="light">No contests yet!</p>
					)
			)
		} else {
			return (
				<Spinner size={32} />
			)
		}
	}
}

export default ContestsList;
