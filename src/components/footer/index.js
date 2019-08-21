import React, { Component } from "react"
import "./footer.css"

class Footer extends Component {
	render() {
		return (
			<div className="footer" id="footer">
				<div className="container">
					<div className="contact">
						<a href="mailto:basson.mareli@gmail.com">basson.mareli@gmail.com</a>
					</div>
					<div className="disclaimer">
						<h5>Disclaimer</h5> <br />
						This template design is based on one I bought from Creative Market. I have however completely rebuilt it using
						ReactJS and is hosting it using{" "}
						<a href="https://www.netlify.com/" target="_blank">
							Netlify
						</a>
						. You can view the repo for this project here:
						<a href="https://github.com/MareliBasson/marelibasson.com" target="_blank" rel="noopener noreferrer">
							marelibasson.com Repo
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
