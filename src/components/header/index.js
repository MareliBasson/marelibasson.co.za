import React, { Component } from "react"
import Menu from "components/menu"
import "./header.css"

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header__left">
					<Menu />
				</div>
				<div className="header__right">
					<div className="icon-links">
						<i className="fab fa-codepen" />
						<i className="fab fa-github" />
						<i className="fab fa-linkedin" />
					</div>
					<div className="about">Mareli Basson</div>
				</div>
			</div>
		)
	}
}

export default Header
