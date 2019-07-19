import React, { Component } from "react"
// import { NavLink } from "react-router-dom"
import "./menu.css"
import { Link, animateScroll as scroll } from "react-scroll"

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
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

	scrollToTop() {
		scroll.scrollToTop()
	}

	render() {
		const offset = -60 // header height + section top padding
		return (
			<div className="menu" ref={node => (this.node = node)}>
				<div className="menu-toggle" onClick={this.handleToggle}>
					<div className="menu-icon" />
				</div>

				<div className={`menu-container ${this.state.menuOpen ? "open" : ""}`}>
					{/* <NavLink activeClassName="active" exact to="/">
						<i className="fa fa-home" /> Home
					</NavLink> */}
					{/* <NavLink activeClassName="active" to="/gallery">
						<i className="fa fa-images" /> Gallery
                    </NavLink> */}
					<div className="link-list">
						<a
							onClick={() => {
								this.scrollToTop()
								this.handleToggle()
							}}
						>
							<i className="fa fa-home" /> Home
						</a>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={this.handleToggle}
						>
							<i className="fa fa-address-card" /> About
						</Link>
						<Link
							activeClass="active"
							to="development"
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={this.handleToggle}
						>
							<i className="fa fa-address-card" /> Development
						</Link>
						<Link
							activeClass="active"
							to="other-skills"
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={this.handleToggle}
						>
							<i className="fa fa-address-card" /> Other Skills
						</Link>
						<Link
							activeClass="active"
							to="footer"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={this.handleToggle}
						>
							<i className="fa fa-envelope-open" /> Contact Me
						</Link>
					</div>
					<div className="menu-footer" />
				</div>
			</div>
		)
	}
}

export default Menu
