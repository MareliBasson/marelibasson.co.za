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
						<div className="footer__col">
							Disclaimer, this template design is based on one I bought through Creative Market. I have however completely
							rebuilt it using ReactJS and netlify for deployment. You can view the repo for this project here:
							<a href="">marelibasson.com Repo</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
