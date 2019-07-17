import React, { Component } from "react"
import Section from "components/section"
import Skill from "components/skill"
import "./about.css"

class Landing extends Component {
	render() {
		return (
			<Section id="about">
				<div className="about-container">
					<div className="column left">
						<h2 className="title">About Me</h2>
						<h5 className="subheading">Front-end Developer & Ux enthusiast</h5>

						<h4 className="summary">
							I'm passionate about Front-end Web Development and User Centered Design.
							I love building amazing websites and user interfaces to the best of my
							abilities.
						</h4>

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

						<a
							href="https://za.linkedin.com/pub/mareli-basson/33/159/41"
							className="button">
							My Resume
						</a>
					</div>
					<div className="column right">
						<Skill skill="html-css" label="HTML/CSS" level="75" />
						<Skill skill="responsive" label="Responsive" level="75" />
						<Skill skill="ux" label="Considering the user" level="75" />
						<Skill skill="js" label="Javascript" level="75" />
						<Skill skill="react" label="React JS" level="75" />
					</div>
				</div>
			</Section>
		)
	}
}

export default Landing
