import React, { Component } from "react"
import "./menu.css"
import { animateScroll as scroll } from "react-scroll"
import HomeMenuList from "./menu-home"

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuOpen: false
		}

		this.handleToggle = this.handleToggle.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.scrollToTop = this.scrollToTop.bind(this)
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
					<div className="link-list">
						<HomeMenuList handleToggle={this.handleToggle} scrollToTop={this.scrollToTop} offset={offset} />
					</div>
					<div className="menu-footer" />
				</div>
			</div>
		)
	}
}

export default Menu
