import React, { Component } from 'react';

export default class Comment extends Component {
	render() {
		const { content } = this.props;
		return (
			<div>
				<p>{content}</p>
			</div>
		)
	}
}
