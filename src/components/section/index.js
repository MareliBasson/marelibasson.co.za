import React, { Component } from "react"
import "./section.css"

class Section extends Component {
	render() {
		const { id, children, background } = this.props

		return (
			<div className={`section ${id}`} style={{ backgroundImage: `url(${background})` }}>
				<div className="container">
					<div className="section-content" id={id}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default Section
