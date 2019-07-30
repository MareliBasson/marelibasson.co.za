import React, { Component } from "react"
import PageTemplate from "components/page-template"
import OtherSkills from "sections/other-skills"
import Convertor from "components/convertor"
import "./page1.css"

class PageOne extends Component {
	render() {
		return (
			<PageTemplate pageHead="Gallery">
				<Convertor />
				{/* <OtherSkills /> */}
			</PageTemplate>
		)
	}
}

export default PageOne
