import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./menu.css"
import { Link, animateScroll as scroll } from "react-scroll"

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
		}

		this.handleToggle = this.handleToggle.bind(this)
	}

	handleToggle() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	render() {
		return (
			<div className="menu">
				<div className="menu-toggle" onClick={this.handleToggle}>
					<div className="menu-icon" />
				</div>

				<div className={`menu-container ${this.state.menuOpen ? "open" : ""}`}>
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
