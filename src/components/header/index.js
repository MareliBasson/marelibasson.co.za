import React, { Component } from "react"
import Menu from "components/menu"
import { Link } from "react-scroll"

import "./header.css"

class Header extends Component {
	render() {
		return (
			<div className="header-container">
				<div className="header">
					<div className="header__left">
						<Menu />
					</div>
					<div className="header__right">
						<a href="https://codepen.io/MareliBasson/">
							<i className="fab fa-codepen" />
						</a>
						<a href="https://github.com/MareliBasson">
							<i className="fab fa-github" />
						</a>
						<a href="https://www.linkedin.com/in/mareli-basson-04115933/">
							<i className="fab fa-linkedin" />
						</a>

						<Link activeClass="active" to="about" smooth={true} offset={-60} duration={500}>
							<span className="uppercase">Mareli Basson</span>
						</Link>
					</div>
				</div>
				<div className="header-buffer" />
			</div>
		)
	}
}

export default Header
