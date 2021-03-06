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
							<i class="fas fa-code" /> Development
						</Link>
					</Fragment>
				) : (
					<NavLink exact activeClassName="active" to="/">
						<i className="fa fa-home" />
						Home
					</NavLink>
				)}

				<a href="https://ambra.portfoliobox.net">
					<i className="fa fa-images" />
					Creative Portfolio
				</a>

				{location !== "/filename-convertor" && (
					<NavLink activeClassName="active" to="/filename-convertor">
						<i class="fas fa-pencil-alt" /> Filename Convertor
					</NavLink>
				)}

				<Link activeClass="active" to="footer" spy={true} smooth={true} offset={-70} duration={500} onClick={handleToggle}>
					<i className="fa fa-envelope-open" /> Contact Me
				</Link>
			</Fragment>
		)
	}
}

export default DefaultMenuList
