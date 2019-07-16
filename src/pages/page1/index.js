import React, { Component } from "react"
import PageTemplate from "components/page-template"
import "./page1.css"

class PageOne extends Component {
	render() {
		return (
			<PageTemplate pageHead="Gallery">
				<p>Some text goes here</p>
			</PageTemplate>
		)
	}
}

export default PageOne
