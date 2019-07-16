import React, { Component } from "react"
import "./section.css"

class Footer extends Component {
	render() {
		const { id } = this.props

		return (
			<div className="section">
				<div className="section-content" id={id}>
					<h1>{id}</h1>
				</div>
			</div>
		)
	}
}

export default Footer
