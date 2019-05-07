import React, { Component } from 'react';
import Report from "./index";
import Spinner from "../spinner";

class ReportsList extends Component {
	render() {
		const { reports } = this.props;

		if (reports) {
			return (
				<div>
					{reports.length ? (
						reports.map((el, i) => (
							<Report />
						))
					) : (
							<p className="light">All clear, no reports!</p>
						)}
				</div>
			);
		} else {
			return <Spinner size={32} />;
		}
	}
}

export default ReportsList;
