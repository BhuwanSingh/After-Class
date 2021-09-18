import React from "react";
import Flipcard from "./Flipcard";
import Flipcard2 from "./Flipcard2";
import Flipcard3 from "./Flipcard3";
import Flipcard4 from "./Flipcard4";

import "./styles.css"

function Home() {
	return (
		<div >
			<div>
			<Flipcard />
			<Flipcard2 />
			<Flipcard3 />
			<Flipcard4 />
			<div className="right">
				<h1>Let's Make Learning Fun!!!</h1>
				<p>Ever wished for a place where you can ask doubts,download notes,sell older books,
					do group study with friends etc all at one place. 
					Don't worry <b>After Class</b> is the right website where you have landed.
				</p>
			</div>
			</div>

			
			
		</div>
	);
}

export default Home;
