import React, { Component } from "react"
import Section from "components/section"
import background from "../../images/bg-polygon.png"
import "./development.css"

class Development extends Component {
	render() {
		return (
			<Section id="development" background={background}>
				<h1>Development</h1>
			</Section>
		)
	}
}

export default Development
