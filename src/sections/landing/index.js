import React, { Component } from "react"
import Section from "components/section"
import background from "../../images/bg-landing.jpg"
import profile from "../../images/profile.jpg"
import "./landing.css"

class Landing extends Component {
	render() {
		return (
			<Section id="landing" background={background}>
				<div className="intro">
					<h1>Hi, I'm Mareli</h1>
					<h2>A front-end developer & UX enthusiast from Cape Town </h2>
					<div className="image" style={{ backgroundImage: `url(${profile})` }} />
				</div>
			</Section>
		)
	}
}

export default Landing
