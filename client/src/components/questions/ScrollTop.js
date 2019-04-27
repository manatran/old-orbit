import React, { Component } from 'react'

export default class ScrollTop extends Component {
	render() {
		return (
			<div
				className="scroll-top"
				style={{ textAlign: "center", marginTop: "16px" }}
			>
				<p className="light" style={{ margin: "0" }}>
					That's it, no more posts! You could always create more if you
					want.
            </p>
				<p
					className="light"
					style={{
						cursor: "pointer",
						margin: "0",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						marginTop: "8px",
						color: "#666",
						userSelect: "none"
					}}
					onClick={() => {
						window.scroll({ top: 0, left: 0, behavior: "smooth" });
					}}
				>
					Back to top
              <i
						className="material-icons"
						style={{
							transform: "rotate(-90deg)",
							fontSize: "14px",
							marginLeft: "8px"
						}}
					>
						subdirectory_arrow_right
              </i>
				</p>
			</div>
		)
	}
}
