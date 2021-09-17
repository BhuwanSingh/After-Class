import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Doubt from "./components/Doubt";
import NEET from "./components/NEET";
import JEE from "./components/JEE";
import LogIn from "./components/LogIn";
import Navbarmenu from "./components/menu/Navbarmenu";
import StudyRoom from "./components/StudyRoom";
import SignUp from "./components/SignUp";

function App() {
	return (
		<div>
			<Router basename="/">
				{/* Add Menu Component */}
				<Navbarmenu />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Doubt" component={Doubt} />
					<Route path="/NEET" component={NEET} />
					<Route path="/JEE" component={JEE} />
					<Route path="/LogIn" component={LogIn} />
					<Route path="/SignUp" component={SignUp} />
					<Route path="/StudyRoom" component={StudyRoom} />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
