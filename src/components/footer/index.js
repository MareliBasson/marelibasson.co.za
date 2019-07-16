import React, { Component } from "react"
import "./footer.css"

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="container">
					<div className="footer__container">
						<div className="footer__col">
							Contact me:
							<a href="mailto:basson.mareli@gmail.com">basson.mareli@gmail.com</a>
						</div>
						<div className="footer__col">
							<div className="icon">a</div>
							<div className="icon">a</div>
							<div className="icon">a</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
