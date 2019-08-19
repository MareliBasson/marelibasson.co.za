import React, { Component } from "react"
import PageTemplate from "components/page-template"
import Convertor from "components/convertor"
import "./convertor.css"

class ConvertorPage extends Component {
	render() {
		return (
			<PageTemplate pageHead="Convertor">
				<Convertor />
			</PageTemplate>
		)
	}
}

export default ConvertorPage
