import React, { Component } from "react"
import Section from "components/section"
import background from "../../images/bg-polygon.png"
import "./development.css"

class Development extends Component {
	render() {
		return (
			<Section id="development" background={background}>
				<h2>Development</h2>
			</Section>
		)
	}
}

export default Development
