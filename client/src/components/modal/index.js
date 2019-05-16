import React, { Component } from 'react';
import "./modal.css";

class Modal extends Component {
	render() {
		return (
			<div className="modal-container">
				<div className="backdrop">
					<div className="modal">
						<h2 className="close">
							{this.props.title}
							<span onClick={this.props.closeModal}>
								<i className="material-icons">close</i>
							</span>
						</h2>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default Modal;
