import React, { Component } from "react"
import PageTemplate from "components/page-template"
import Section from "components/section"
import FilenameConvertor from "components/filename-convertor"
import "./tools.css"

class ToolsPage extends Component {
	render() {
		return (
			<PageTemplate pageHead="Convertor">
				<Section>
					<FilenameConvertor />
				</Section>
			</PageTemplate>
		)
	}
}

export default ToolsPage
