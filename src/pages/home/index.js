import React, { Component } from "react"
import PageTemplate from "components/page-template"
import Section from "components/section"
import "./home.css"

class HomePage extends Component {
	render() {
		return (
			<PageTemplate pageHead="Home Page">
				<Section id={"section1"} />
				<Section id={"section2"} />
				<Section id={"section3"} />
				<Section id={"section4"} />
				<Section id={"section5"} />
				<Section id={"section6"} />
				<Section id={"section7"} />
			</PageTemplate>
		)
	}
}

export default HomePage
