import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "components/header"
import Footer from "components/footer"
import "./page-template.css"

class PageTemplate extends Component {
	render() {
		const { children } = this.props

		return (
			<div className="page">
				<Header />
				<div className="content">{children}</div>
				<Footer />
			</div>
		)
	}
}

PageTemplate.propTypes = {
	children: PropTypes.any,
	pageHead: PropTypes.string
}

export default PageTemplate
