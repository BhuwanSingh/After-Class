import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./styles.css";

class Flipcard4 extends Component {
	render() {
		return (
			<Flippy className="flippy4"
				flipOnHover={true} // default false
				flipOnClick={false} // default false
				flipDirection="horizontal" // horizontal or vertical
				ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
				// if you pass isFlipped prop component will be controlled component.
				// and other props, which will go to div
				 /// these are optional style, it is not necessary
			>
				<FrontSide className="front4"></FrontSide>
				<BackSide className="back4">Never worry about your old books,just sell them here at a right price.</BackSide>
			</Flippy>
		);
	}
}
export default Flipcard4;
