import React, { Component } from 'react';
import Spinner from "../spinner";
import { formatDate } from "../../helpers";

import "./contests.css";

class ContestsList extends Component {

	render() {
		const { contests } = this.props;
		if (contests) {
			return (
				contests.length ? (
					<>
						<div className="contest-list-item">
							<h5>Title</h5>
							<h5>Startdate</h5>
							<h5>Enddate</h5>
						</div>
						{contests.map((el, i) => (
							<div className="contest-list-item" key={el.id}>
								<p>{el.title}</p>
								<p>{formatDate(el.from)}</p>
								<p>{formatDate(el.til)}</p>
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
