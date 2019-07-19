import React, { Component } from "react"
import Section from "components/section"
import background from "../../images/bg-landing.jpg"
import profile from "../../images/profile.jpg"
import Fade from "react-reveal/Fade"
import { Link } from "react-scroll"
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
					<Fade up delay={600} enter={this.state.showTitle}>
						<h2>A front-end developer & UX enthusiast from Cape Town </h2>
					</Fade>
					<Fade up delay={1000} enter={this.state.showTitle}>
						<div className="image" style={{ backgroundImage: `url(${profile})` }} />
					</Fade>
				</div>
				<Link className="scroll-down" activeClass="active" to="about" smooth={true} offset={-60} duration={500}>
					<Fade delay={2000} enter={this.state.showTitle}>
						<span>Get to know me</span>
						<i className="fa fa-arrow-circle-down" />
					</Fade>
				</Link>
			</Section>
		)
	}
}

export default Landing
