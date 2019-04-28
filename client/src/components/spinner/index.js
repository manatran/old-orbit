import React, { Component } from "react";
import "./spinner.css";

class Spinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 24
		}
		if (this.props.size) this.state.size = this.props.size;
	}

	render() {
		return (
			<div
				style={{
					height: `${this.state.size}px`,
					width: `${this.state.size}px`
				}}
				className="spinner"
			/>
		);
	}
}

export default Spinner;
