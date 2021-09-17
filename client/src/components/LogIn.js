import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import {NavLink} from "react-router-dom";
import logo from '../img/default.png';
export const LogIn = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (e) => {
		e.preventDefault();

		const res = await fetch("user/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await res.json();

		if (data.status === 400 || !data) {
			window.alert("Invalid Credentials");
			console.log("Invalid Credentials");
		} else {
			window.alert("Successful Login");
			console.log("Successful Login");
			history.push("/");
		}
	};

	return (
		<Fragment>
			<section>
				<div>
					<div className="signup-form ">
						<form method="POST" onSubmit={loginUser}>
							<div className="col">
							
								<h2 className="h3 mb-3 font-weight-normal">Login</h2>
								<div className="login-img" style={{padding: "1rem"}}><img src={logo} alt="loginbud" />
								</div><div className="form-field">
									<input
										type="text"
										name="email"
										id="email"
										autoComplete="off"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										placeholder="Your Email"
									/>
								</div>
								<div className="form-field">
									<input
										type="password"
										name="password"
										id="password"
										autoComplete="off"
										value={password}
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										placeholder="Your Password"
									/>
								</div>
								<div className="form-field d-flex justify-content-center">
									<input
										className="btn btn-lg btn-primary btn-block"
										type="submit"
										name="signin"
										id="signin"
										value="Sign In"
										style={{ width: "50%" }}
									/>
								</div>
							</div>
							
						</form><NavLink to="/Sign Up" className="signup-image-link">
								New here? 
							</NavLink>
						
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default LogIn;
