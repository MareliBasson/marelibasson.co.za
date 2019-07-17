import React, { Component } from "react"
import "./skill.css"

class Skill extends Component {
	render() {
		const { skill, label, level } = this.props
		return (
			<div className="skill">
				<label for={skill}>{label}:</label>
				<progress id={skill} max="100" value={level} />
			</div>
		)
	}
}

export default Skill
