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
import Chat  from "./components/Chat"
import BTech from "./components/BTech";
import CAT from "./components/CAT";
import CBSE from "./components/CBSE";
import CLAT from "./components/CLAT";
import IAS from "./components/IAS";
import WhiteBoard from "./components/WhiteBoard";
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
					<Route path="/BTech" component={BTech} />
					<Route path="/CLAT" component={CLAT} />
					<Route path="/CAT" component={CAT} />
					<Route path="/CBSE" component={CBSE} />
					<Route path="/IAS" component={IAS} />
					<Route path="/LogIn" component={LogIn} />
					<Route path="/SignUp" component={SignUp} />
					<Route path="/StudyRoom" component={StudyRoom} />
					<Route path="/Chat" component={Chat} />
					<Route path="/WhiteBoard" component={WhiteBoard} />

				</Switch>
			</Router>
		</div>
	);
}
export default App;
