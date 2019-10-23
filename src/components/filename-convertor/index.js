import React, { Component } from 'react';
import './filename-convertor.css';

var _ = require('lodash');

class FilenameConvertor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filenameInput: '',
			copySuccess: 'Copy',
			spaces: 'dash',
			prefix: '',
			suffix: '',
			formattedName: ''
		};

		this.formatName = this.formatName.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		const name = e.target.name,
			val = e.target.value.trim();

		this.setState({
			[name]: val
		});
	};

	formatName = e => {
		const { filenameInput, spaces, prefix, suffix } = this.state;

		const spaceSymbol = spaces === 'underscore' ? '_' : spaces === 'dash' ? '-' : '';

		const fullname = `${prefix} ${filenameInput} ${suffix}`;

		const formatFullname = fullname
			.trim()
			.toLowerCase()
			.replace(/[-_]/g, ' ')
			.replace(/[.,`"'“”/#!$%^&*;:{}=~()]/g, '');

		this.setState({
			formattedName: formatFullname.replace(/\s+/g, spaceSymbol)
		});
	};

	componentDidUpdate(prevProps, prevState) {
		if (!_.isEqual(prevState, this.state)) {
			this.formatName();
		}
	}

	copyToClipboard = e => {
		e.preventDefault();

		this.filename.select();
		document.execCommand('copy');
		e.target.focus();
		this.setState({ copySuccess: 'Copied!' });
	};

	render() {
		const { filenameInput, formattedName, copySuccess, spaces, prefix, suffix } = this.state;

		return (
			<div className="container convertor">
				<h2>
					<strong>Filename convertor</strong>
				</h2>
				<form>
					<div className="filename-input-container">
						<div className="filename-input">
							<input
								type="text"
								name="filenameInput"
								value={filenameInput}
								onClick={e => {
									this.setState({ copySuccess: 'Copy' });
								}}
								onChange={this.handleChange}
							/>

							<button
								type="submit"
								onClick={e => {
									e.preventDefault();
									this.setState({ filenameInput: '', copySuccess: 'Copy' });
								}}
							>
								<i className="fas fa-backspace" />
							</button>
						</div>

						<div
							className="copy-btn"
							onClick={e => {
								if (formattedName !== '') {
									this.copyToClipboard(e);
								}
							}}
						>
							<input value={formattedName} ref={filename => (this.filename = filename)} />
							<button type="submit">{copySuccess}</button>
						</div>
					</div>

					<div className="settings">
						<div className="sections spaces">
							<strong>Replace spaces with:</strong>
							<br />
							<input
								type="radio"
								name="spaces"
								id="dash"
								value="dash"
								checked={spaces === 'dash'}
								onChange={this.handleChange}
							/>
							<label htmlFor="dash">Dashes</label>
							<input
								type="radio"
								name="spaces"
								id="underscore"
								value="underscore"
								onChange={this.handleChange}
							/>
							<label htmlFor="underscore">Underscores</label>
							<input type="radio" name="spaces" id="remove" value="remove" onChange={this.handleChange} />
							<label htmlFor="remove">Remove them</label>
						</div>

						<div className="fixes">
							<label htmlFor="prefix">Prefix: </label>
							<input type="text" name="prefix" value={prefix} onChange={this.handleChange} />
						</div>
						<div className="fixes">
							<label htmlFor="suffix">Suffix: </label>
							<input type="text" name="suffix" value={suffix} onChange={this.handleChange} />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default FilenameConvertor;
