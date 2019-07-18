import React, { Component } from "react"
import "./footer.css"

class Footer extends Component {
	render() {
		return (
			<div className="footer" id="footer">
				<div className="container">
					<div className="footer__container">
						<div className="footer__col">
							Contact me:
							<a href="mailto:basson.mareli@gmail.com">basson.mareli@gmail.com</a>
						</div>
						<div className="footer__col">col 2</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
