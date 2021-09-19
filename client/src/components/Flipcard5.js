import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";
import "./styles.css";

class Flipcard5 extends Component {
	render() {
		return (
			<Flippy className="flippy5"
				flipOnHover={true} // default false
				flipOnClick={false} // default false
				flipDirection="horizontal" // horizontal or vertical
				ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
				// if you pass isFlipped prop component will be controlled component.
				// and other props, which will go to div
				 /// these are optional style, it is not necessary
			>
				<FrontSide className="front5"></FrontSide>
				<Link to="/ContactUs" className="text-card">
				<BackSide className="back5"> 
				Contact Us
				hi</BackSide></Link>
			</Flippy>
		);
	}
}
export default Flipcard5;
