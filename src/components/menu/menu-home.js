import React, { Component, Fragment } from "react"
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom"

class HomeMenuList extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { handleToggle, scrollToTop, offset } = this.props
		return (
			<Fragment>
				<a
					onClick={() => {
						scrollToTop()
						handleToggle()
					}}
				>
					<i className="fa fa-home" /> Home
				</a>
				<Link activeClass="active" to="about" spy={true} smooth={true} offset={offset} duration={500} onClick={handleToggle}>
					<i className="fa fa-address-card" /> About
				</Link>
				<Link activeClass="active" to="development" spy={true} smooth={true} offset={offset} duration={500} onClick={handleToggle}>
					<i className="fa fa-address-card" /> Development
				</Link>
				<NavLink activeClassName="active" to="/gallery">
					<i className="fa fa-images" /> Other Skills
				</NavLink>
				<NavLink activeClassName="active" to="/convertor">
					<i className="fa fa-images" /> Filename Tool
				</NavLink>
				<Link activeClass="active" to="footer" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
					<i className="fa fa-envelope-open" /> Contact Me
				</Link>
			</Fragment>
		)
	}
}

export default HomeMenuList
