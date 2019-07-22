import React, { Component } from "react"
import PageTemplate from "components/page-template"
import OtherSkills from "sections/other-skills"
import "./page1.css"

class PageOne extends Component {
	render() {
		return (
			<PageTemplate pageHead="Gallery">
				<OtherSkills />
			</PageTemplate>
		)
	}
}

export default PageOne
