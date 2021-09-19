import React from 'react';
import Board from '../board/Board';
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: '#000000',
			size: '5',
		};
	}

	changeColor(params) {
		this.setState({
			color: params.target.value,
		});
	}

	changeSize(params) {
		this.setState({
			size: params.target.value,
		});
	}

	render() {
		const url = window.location.href;

		return (
			<div className='container-wb'>
				<div className='tools-section-wb'>
					<div className='color-picker-container-wb'>
						Select Brush Colour:
						<input
							className='colorselectinput'
							type='color'
							value={this.state.color}
							onChange={this.changeColor.bind(this)}
						/>
					</div>

					<div
						className='brushsize-container-wb'
						onChange={this.changeSize.bind(this)}
					>
						Select Brush Size:
						<select className="sel" value={this.state.size}>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>10</option>
							<option>15</option>
							<option>20</option>
							<option>25</option>
							<option>30</option>
							<option>50</option>
							<option>100</option>
						</select>
					</div>
				</div>
				<div>
					<h2 className='txt'>Want to invite more friends?</h2>
					<h3 className='tpt'>
						Tell them to join : <span> </span>
						<CopyToClipboard text={url}>
							<button className='btn btn-primary bkl'>
								Copy URL to the clipboard
							</button>
						</CopyToClipboard>
					</h3>
				</div>
				<div className='board-container-wb'>
					<Board color={this.state.color} size={this.state.size}></Board>
				</div>
			</div>
		);
	}
}

export default Container;
