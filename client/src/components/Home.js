import React from "react";
import Flipcard from "./Flipcard";
import Flipcard2 from "./Flipcard2";
import Flipcard3 from "./Flipcard3";
import Flipcard4 from "./Flipcard4";
import Contactus from "./contactus";
import Error404 from "./error404";
import "./styles.css"
function Home() {
	return (
		<div>
			<Flipcard />
			<Flipcard2 />
			<Flipcard3 />
			<Flipcard4 />
			<Contactus></Contactus>
		</div>
	);
}

export default Home;
