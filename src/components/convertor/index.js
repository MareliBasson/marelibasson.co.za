import React, { Component } from "react"

import "./convertor.css"

class Convertor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			input: "",
			copySuccess: ""
		}
	}

	handleChange = e => {
		this.setState({
			input: e.target.value.replace(/\s+/g, "-").toLowerCase()
		})
	}

	copyToClipboard = e => {
		e.preventDefault()
		this.filename.select()
		document.execCommand("copy")
		e.target.focus()
		this.setState({ copySuccess: "Copied!" })
	}

	render() {
		return (
			<div className="container convertor">
				<form>
					<input
						ref={filename => (this.filename = filename)}
						name="name"
						value={this.state.input}
						onClick={e => {
							this.setState({ input: "", copySuccess: "" })
						}}
						onChange={e => this.handleChange(e)}
					/>
					<div className="copy-btn">
						<button onClick={this.copyToClipboard} type="submit">
							Copy
						</button>
						<div>{this.state.copySuccess}</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Convertor
