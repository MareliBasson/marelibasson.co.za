import React, { Component } from "react"
import "./portfolio-link.css"

class PortfolioLink extends Component {
	render() {
		return (
			<a href="https://ambra.portfoliobox.net/" className="portfolio-link" target="_blank" rel="noopener noreferrer">
				<i class="fas fa-paint-brush" /> <span>View my creative portfolio</span>
			</a>
		)
	}
}

export default PortfolioLink
