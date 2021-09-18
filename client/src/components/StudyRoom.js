import React, { useState } from 'react';
import './StudyRoom.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
var crypto = require('crypto');

const StudyRoom = () => {
	const [url, seturl] = useState('');
	const [copied, setCopied] = useState(false);
	const createURL = () => {
		var id = crypto.randomBytes(20).toString('hex');
		seturl('/whiteboard/' + id);
	};
	let completeurl = 'localhost:3000' + url;
	return (
		<div className='whiteboard__con'>
			<h1 className='whiteboard__title'>Create whiteboard</h1>
			<button className='btn btn-primary btn__whiteboard' onClick={createURL}>
				Create whiteboard
			</button>

			{url ? (
				<div className='tt'>
					<Link className='white_link' target='_blank' to={url}>
						Click here to go to your whiteboard
					</Link>

					<CopyToClipboard
						className='ab btn btn-primary'
						text={completeurl}
						onCopy={() => {
							setCopied(true);
						}}
					>
						{copied ? (
							<button style={{ backgroundColor: 'green' }} className='ab'>
								Copied
							</button>
						) : (
							<button>Copy</button>
						)}
					</CopyToClipboard>
				</div>
			) : (
				<h1 className='to'>(No url generated)</h1>
			)}
		</div>
	);
};

export default StudyRoom;
