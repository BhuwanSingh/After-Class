import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";
import "./styles.css";

class Flipcard2 extends Component {
	render() {
		return (
			<Flippy className="flippy2"
				flipOnHover={true} // default false
				flipOnClick={false} // default false
				flipDirection="vertical" // horizontal or vertical
				ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
				// if you pass isFlipped prop component will be controlled component.
				// and other props, which will go to div
		        /// these are optional style, it is not necessary
			>
				<FrontSide className="front2"></FrontSide>
				<Link to="/StudyRoom" className="text-card">
				<BackSide className="back2"> 
				Group study is still in trend and what's more classy if it comes with a whiteboard you all can work on together. </BackSide></Link> 
			</Flippy>

		);
	}
}
export default Flipcard2;
