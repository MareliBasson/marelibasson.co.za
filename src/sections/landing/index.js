import React, { Component } from "react"
import Section from "components/section"
import background from "../../images/bg-landing.jpg"
import profile from "../../images/profile.jpg"
import Fade from "react-reveal/Fade"
import "./landing.css"

class Landing extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showTitle: false
		}
	}

	componentDidMount() {
		if (!this.state.showTitle) {
			this.setState({ showTitle: true })
		}
	}
	render() {
		return (
			<Section id="landing" background={background}>
				<div className="intro">
					<Fade delay={100} enter={this.state.showTitle}>
						<h1>Hi, I'm Mareli</h1>
					</Fade>
					<Fade up delay={800} enter={this.state.showTitle}>
						<h2>A front-end developer & UX enthusiast from Cape Town </h2>
					</Fade>
					<Fade up delay={1200} enter={this.state.showTitle}>
						<div className="image" style={{ backgroundImage: `url(${profile})` }} />
					</Fade>
				</div>
			</Section>
		)
	}
}

export default Landing
