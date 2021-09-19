import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer1">
			<footer>
				<ul class="footer__links">
					<li>
						<NavLink className="flink1" to={`/ContactUs`}>
							Contact us
						</NavLink>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
