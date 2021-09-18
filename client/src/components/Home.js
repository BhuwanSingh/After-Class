import React from "react";
import Flipcard from "./Flipcard";
import Flipcard2 from "./Flipcard2";
import Flipcard3 from "./Flipcard3";
import Flipcard4 from "./Flipcard4";
import "./styles.css"
function Home() {
	return (
		<div >
			<div className="left">
			<Flipcard />
			<Flipcard2 />
			<Flipcard3 />
			<Flipcard4 />
			</div>
			<div className="right">

			</div>
			
		</div>
	);
}

export default Home;
