import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./styles.css";

class Flipcard extends Component {
	render() {
		return (
			<Flippy className="flippy"
				flipOnHover={true} // default false
				flipOnClick={false} // default false
				flipDirection="horizontal" // horizontal or vertical
				ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
				// if you pass isFlipped prop component will be controlled component.
				// and other props, which will go to div
				// these are optional style, it is not necessary
			>
				<FrontSide className="front"></FrontSide>
				<BackSide className="back">Having doubts and don't know who to ask? Tension not,just click here.</BackSide>
			</Flippy>
		);
	}
}
export default Flipcard;
