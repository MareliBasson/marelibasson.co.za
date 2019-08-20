import React, { Component } from "react"
import Section from "components/section"
import Skill from "components/skill"
import { Link } from "react-scroll"
import Fade from "react-reveal/Fade"
import "./about.css"

class Landing extends Component {
	render() {
		const skills = require("../../data/skills").skills

		return (
			<Section id="about">
				<div className="about-container">
					<Fade left>
						<div className="column left">
							<h2 className="title">About Me</h2>
							<h5 className="subheading">Front-end Developer & Ux enthusiast</h5>

							<h4 className="summary">
								I'm passionate about Front-end Web Development and User Centered Design. I love building amazing websites
								and user interfaces to the best of my abilities.
							</h4>

							<p>
								Before becoming a developer I worked as a teacher, a newspaper layout artist, a start up intern monkey and a
								freelancer. I gained skills in a myriad of fields and I learnt to work in a range of environments with some
								of great colleagues (and learnt how to play nice with the less than nice ones). All those different
								experiences led me to front-end as the field I've chosen as my career as there's always so much to learn and
								so much innovation left to uncover. It's that perfect blend of creative and technical that keeps me coming
								back since fiddling with CSS in high-school.
							</p>
							<p>
								While I'm still relatively new to front-end (since 2014), I have a decade of professional working experience
								and an extensive portfolio, which I know showcases my passion and ability in multiple skill fields. I am an
								avid learner and given the right environment and structure I am very confident in my ability to pick up new
								skills.
							</p>
							<p>
								<Link activeClass="active" to="development" smooth={true} offset={-60} duration={500}>
									Please take a look below at some of my favourite projects I've worked on.
								</Link>
							</p>

							<a
								href="https://za.linkedin.com/pub/mareli-basson/33/159/41"
								className="button"
								target="_blank"
								rel="noopener noreferrer"
							>
								My Resume
							</a>
						</div>
					</Fade>
					<div className="column right">
						<div className="skills">
							<h5 className="skills-title">My skill experience is:</h5>
							<div className="skills-legend">
								<div className="labels">
									<div>So-so</div>
									<div>I get by</div>
									<div>Comfortable</div>
									<div>Better than most</div>
									<div>Hot shit</div>
								</div>
							</div>

							{skills.map((skill, index) => (
								<Skill key={`skill-${index}`} skill={skill.skill} label={skill.label} level={skill.level} index={index} />
							))}
						</div>
						<Fade up delay={100} fraction={0.5}>
							<div className="tools">
								<h5 className="skills-title">Tools I'm comfortable with:</h5>
								<div className="tool-icons">
									<i className="fab fa-bitbucket" />
									<i className="fab fa-github" />
									<i className="fab fa-gitkraken" />
									<i className="fab fa-npm" />
									<i className="fab fa-slack" />
									<i className="fab fa-stack-overflow" />
									<i className="fab fa-codepen" />
									<i className="fab fa-confluence" />
									<i className="fab fa-docker" />
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</Section>
		)
	}
}

export default Landing
