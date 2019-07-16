import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./menu.css"
import { Link } from "react-scroll"

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: true
		}

		this.handleToggle = this.handleToggle.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	componentWillMount() {
		document.addEventListener("mousedown", this.handleClick, false)
	}
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClick, false)
	}

	handleClick(e) {
		if (this.node.contains(e.target)) {
			return
		}

		this.setState({
			menuOpen: false
		})
	}

	handleToggle() {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}

	render() {
		return (
			<div className="menu" ref={node => (this.node = node)}>
				<div className="menu-toggle" onClick={this.handleToggle}>
					<div className="menu-icon" />
				</div>

				<div className={`menu-container ${this.state.menuOpen ? "open" : ""}`}>
					<NavLink activeClassName="active" exact to="/">
						<i className="fa fa-home" /> Home
					</NavLink>
					<NavLink activeClassName="active" to="/page1">
						<i className="fa fa-images" /> Gallery
					</NavLink>
					{/* <NavLink activeClassName="active" to="/page2">
                        Page 2
                    </NavLink> */}
					<Link
						activeClass="active"
						to="section1"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={this.handleToggle}
					>
						Section 1
					</Link>
					<Link
						activeClass="active"
						to="section2"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={this.handleToggle}
					>
						Section 2
					</Link>
					<Link
						activeClass="active"
						to="section3"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={this.handleToggle}
					>
						Section 3
					</Link>
					<Link
						activeClass="active"
						to="section4"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={this.handleToggle}
					>
						Section 4
					</Link>
					<Link
						activeClass="active"
						to="section5"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={this.handleToggle}
					>
						Section 5
					</Link>
					<Link
						activeClass="active"
						to="section6"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						onClick={this.handleToggle}
					>
						Section 6
					</Link>
					<Link activeClass="active" to="footer" spy={true} smooth={true} offset={-70} duration={500} onClick={this.handleToggle}>
						Contact Me
					</Link>
				</div>
			</div>
		)
	}
}

export default Menu
