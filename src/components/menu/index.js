import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./menu.css"
import { Link, animateScroll as scroll } from "react-scroll"

class Menu extends Component {
	render() {
		return (
			<div className="menu">
				<div className="menu-toggle">
					<div className="menu-icon" />
				</div>

				<div className="menu-container">
					<NavLink activeClassName="active" exact to="/">
						Home
					</NavLink>
					<NavLink activeClassName="active" to="/page1">
						Gallery
					</NavLink>
					{/* <NavLink activeClassName="active" to="/page2">
					Page 2
				</NavLink> */}
					<Link activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
						test
					</Link>
				</div>
			</div>
		)
	}
}

export default Menu
