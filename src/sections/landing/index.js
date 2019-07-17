import React, { Component } from "react"
import Section from "components/section"
import background from "../../images/bg-landing.jpg"
import "./landing.css"

class Landing extends Component {
	render() {
		return (
			<Section id="landing" background={background}>
				<h1>Landing</h1>
			</Section>
		)
	}
}

export default Landing
