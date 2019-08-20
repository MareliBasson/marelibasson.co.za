import React, { Component, Fragment } from "react"
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom"

class DefaultMenuList extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { handleToggle, scrollToTop, offset, location } = this.props
		console.log(location)
		return (
			<Fragment>
				{location === "/" ? (
					<Fragment>
						<a
							onClick={() => {
								scrollToTop()
								handleToggle()
							}}
						>
							<i className="fa fa-home" /> Home
						</a>
						<Link
							activeClass="active"
							className="sub-link"
							to="about"
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={handleToggle}
						>
							<i className="fa fa-address-card" /> About
						</Link>
						<Link
							activeClass="active"
							className="sub-link"
							to="development"
							spy={true}
							smooth={true}
							offset={offset}
							duration={500}
							onClick={handleToggle}
						>
							<i className="fa fa-address-card" /> Development
						</Link>
					</Fragment>
				) : (
					<NavLink activeClassName="active" to="/">
						<i className="fa fa-home" />
						Home
					</NavLink>
				)}
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

export default DefaultMenuList
