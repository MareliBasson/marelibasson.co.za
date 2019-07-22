import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import "./skill.css"

class Skill extends Component {
	render() {
		const { skill, label, level, index } = this.props

		return (
			<Fade up delay={100 * index} duration={500} fraction={0.5}>
				<div className="skill">
					<label htmlFor={skill}>{label}:</label>
					<progress id={skill} max="100" value={level} />
				</div>
			</Fade>
		)
	}
}

export default Skill
