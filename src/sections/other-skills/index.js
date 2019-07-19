import React, { Component } from "react"
import Section from "components/section"
import Gallery from "components/gallery"
import "./other-skills.css"

class OtherSkills extends Component {
	render() {
		const photography = require("../../data/photography").photos
		console.log(photography)
		return (
			<Section id="other-skills">
				<h2>Other Skills</h2>
				<Gallery data={photography} galleryName="photography" />
				<Gallery data={[]} galleryName="illustration" />
			</Section>
		)
	}
}

export default OtherSkills
