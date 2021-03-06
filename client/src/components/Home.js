import React from 'react';
import Flipcard from './Flipcard';
import Flipcard2 from './Flipcard2';
import Flipcard3 from './Flipcard3';
import Flipcard4 from './Flipcard4';
import Flipcard5 from './Flipcard5';

import Flipcard7 from './Flipcard7';
import Footer from './Footer';
import './styles.css';
import './home.css';
function Home() {
	return (
		<div className='bb1'>
			<div className='homehead'>
				<div className='lefthome'>
					<Flipcard />
					<Flipcard2 />
					<Flipcard3 />
					<Flipcard4 />
					<Flipcard7 />
					<Flipcard5 />
					
				</div>
				<div className='righthome'>
					<h1 className='my_h'>Studying online just got easy and fun!</h1>
					<p className='my_p'>
						Ever wished for a place where you can ask doubts,download notes,sell
						older books, do group study with friends etc all at one place. Don't
						worry <b>After Class</b> is the right website where you have landed.
					</p>
				</div>
			</div>
			<div homehead></div>

			<Footer />
		</div>
	);
}

export default Home;
