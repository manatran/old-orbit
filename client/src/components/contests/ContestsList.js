import React, { Component } from 'react';
import Spinner from "../spinner";
import { capitalizeFirstLetter } from "../../helpers";

import "./contests.css";

class ContestsList extends Component {

	render() {
		const { contests } = this.props;
		if (contests) {
			return (
				contests.length ? (
					<>
						<div className="contest-list-item">
							<h4>Title</h4>
							<h4>Month</h4>
							<h4>Year</h4>
						</div>
						{contests.map((el, i) => (
							<div className="contest-list-item" key={el.id}>
								<p>{el.title}</p>
								<p>{capitalizeFirstLetter(el.month)}</p>
								<p>{el.year}</p>
							</div>
						))}
					</>
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
