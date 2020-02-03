import React, { Component } from "react"
import PageTemplate from "components/page-template"
import Section from "components/section"
import FilenameConvertor from "components/filename-convertor"
import "./filename-convertor.css"

class FilenameConvertorPage extends Component {
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

export default FilenameConvertorPage
