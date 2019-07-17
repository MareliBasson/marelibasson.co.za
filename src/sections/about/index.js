import React, { Component } from "react"
import Section from "components/section"
import "./about.css"

class Landing extends Component {
	render() {
		return (
			<Section id="about">
				<div className="about-container">
					<div className="column left">
						<h2>About Me</h2>
						<h5>Front-end Developer & Ux enthusiast</h5>

						<p>
							Over the last decade I've been a teacher, a newspaper layout artist, a
							start up intern monkey, a freelancer, a front-end developer at a
							branding firm and now a front-end and ux developer on an enterprise app
							development platform. I've gained skills in a myriad of fields and I
							learnt to work in a range of environments with a host of great
							colleagues (and learnt how to play nice with the less than nice ones).
							All those different jobs led me to front-end as the field I'm pursuing
							as a career. It's that perfect blend of creative and technical that
							keeps me coming back since fiddling with CSS in high-school.
						</p>
						<p>
							While I'm still relatively new to front-end (since June 2014), I have a
							decade of professional working experience and an extensive portfolio,
							which I know showcases my passion and ability. I am an avid learner and
							given the right environment and structure I am very confident in my
							ability to pick up new skills.
						</p>
						<p>
							<a href="">
								Please take a look below at some of my favourite projects I've
								worked on.
							</a>
						</p>
					</div>
					<div className="column right">test</div>
				</div>
			</Section>
		)
	}
}

export default Landing
