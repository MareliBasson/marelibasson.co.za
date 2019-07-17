import React, { Component } from "react"
import PageTemplate from "components/page-template"
import Landing from "sections/landing"
import About from "sections/about"
import Development from "sections/development"
import OtherSkills from "sections/other-skills"
import Photography from "sections/photography"
import "./home.css"

class HomePage extends Component {
	render() {
		return (
			<PageTemplate pageHead="Home Page">
				<Landing />
				<About />
				<Development />
				<OtherSkills />
				<Photography />
			</PageTemplate>
		)
	}
}

export default HomePage
