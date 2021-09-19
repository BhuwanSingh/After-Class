import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../../img/logo.png";

const Navbarmenu = () => {
	const [isMenu, setisMenu] = useState(false);
	const [isResponsiveclose, setResponsiveclose] = useState(false);

	const toggleClass = () => {
		setisMenu(isMenu === false ? true : false);
		setResponsiveclose(isResponsiveclose === false ? true : false);
	};

	let boxClass = ["main-menu menu-right menuq1"];
	if (isMenu) {
		boxClass.push("menuq2");
	} else {
		boxClass.push("");
	}
	// if (localStorage.getItem('username'))
	// 	setUser(localStorage.getItem('username'));
	// else setUser('');
	const [isMenuSubMenu, setMenuSubMenu] = useState(false);
	const toggleSubmenu = () => {
		setMenuSubMenu(isMenuSubMenu === false ? true : false);
	};
	const singoutfunction = () => {
		const logOutUser = async () => {
			localStorage.clear();
			const res = await fetch("user/signout", {
				method: "POST",
			});
		};

		logOutUser();
	};

	let boxClassSubMenu = ["sub__menus"];
	if (isMenuSubMenu) {
		boxClassSubMenu.push("sub__menus__Active");
	} else {
		boxClassSubMenu.push("");
	}
	return (
		<header className="header__middle">
			<div className="container">
				<div className="row">
					{" "}
					{/* Add Logo  */}{" "}
					<div className="header__middle__logo">
						<NavLink exact activeClassName="is-active" to="/">
							<img src={logo} alt="logo" />
						</NavLink>{" "}
					</div>{" "}
					<div className="header__middle__menus">
						<nav className="main-nav ">
							{" "}
							{/* Responsive Menu Button */}{" "}
							{isResponsiveclose === true ? (
								<>
									<span
										className="menubar__button"
										style={{
											display: "none",
										}}
										onClick={toggleClass}
									>
										{" "}
										<FiXCircle />{" "}
									</span>{" "}
								</>
							) : (
								<>
									<span
										className="menubar__button"
										style={{
											display: "none",
										}}
										onClick={toggleClass}
									>
										{" "}
										<FiAlignRight />{" "}
									</span>{" "}
								</>
							)}{" "}
							<ul className={boxClass.join(" ")}>
								<li
									onClick={toggleSubmenu}
									className="menu-item sub__menus__arrows"
								>
									{" "}
									<Link to="#">
										{" "}
										Study Material <FiChevronDown />{" "}
									</Link>{" "}
									<ul
										className={boxClassSubMenu.join(" ")}
										id="submenu_button"
									>
										<li>
											{" "}
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/JEE`}
											>
												{" "}
												JEE{" "}
											</NavLink>{" "}
										</li>{" "}
										<li>
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/NEET`}
											>
												{" "}
												NEET{" "}
											</NavLink>{" "}
										</li>{" "}
										<li>
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/CAT`}
											>
												{" "}
												CAT{" "}
											</NavLink>{" "}
										</li>{" "}
										<li>
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/BTech`}
											>
												{" "}
												BTech{" "}
											</NavLink>{" "}
										</li>{" "}
										<li>
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/CBSE`}
											>
												{" "}
												CBSE{" "}
											</NavLink>{" "}
										</li>{" "}
										<li>
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/IAS`}
											>
												{" "}
												IAS{" "}
											</NavLink>{" "}
										</li>{" "}
										<li>
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/CLAT`}
											>
												{" "}
												CLAT{" "}
											</NavLink>{" "}
										</li>{" "}
									</ul>{" "}
								</li>{" "}
								<li className="menu-item">
									<NavLink
										exact
										activeClassName="is-active"
										onClick={toggleClass}
										to={`/StudyRoom`}
									>
										{" "}
										Study Room{" "}
									</NavLink>{" "}
								</li>{" "}
								<li className="menu-item ">
									<NavLink
										onClick={toggleClass}
										activeClassName="is-active"
										to={`/Doubt`}
									>
										{" "}
										Discuss{" "}
									</NavLink>{" "}
								</li>{" "}
								{localStorage.getItem("username") ? (
									<li
										onClick={toggleSubmenu}
										className="menu-item sub__menus__arrows"
									>
										{" "}
										<Link to="#">
											{" "}
											{localStorage.getItem(
												"username"
											)}{" "}
											<FiChevronDown />{" "}
										</Link>{" "}
										<ul
											className={boxClassSubMenu.join(
												" "
											)}
											id="submenu_button"
										>
											<li>
												{" "}
												<NavLink
													onClick={toggleClass}
													activeClassName="is-active"
													to={`/profile`}
												>
													My Profile{" "}
												</NavLink>{" "}
											</li>{" "}
											<li>
												{' '}
												<NavLink
													onClick={toggleClass}
													activeClassName='is-active'
													to={`/write`}
												>
													Write Post
												</NavLink>{' '}
											</li>
											<li>
												<NavLink
													onClick={toggleClass}
													activeClassName="is-active"
													to={`/chat`}
												>
													Chat{" "}
												</NavLink>{" "}
											</li>{" "}
											<li>
												<NavLink
													onClick={singoutfunction}
													activeClassName="is-active"
													to={`/`}
												>
													LogOut{" "}
												</NavLink>{" "}
											</li>{" "}
										</ul>{" "}
									</li>
								) : (
									<>
										<li className="menu-item  ">
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/LogIn`}
											>
												{" "}
												Log In{" "}
											</NavLink>{" "}
										</li>{" "}
										<li className="menu-item ">
											<NavLink
												onClick={toggleClass}
												activeClassName="is-active"
												to={`/SignUp`}
											>
												{" "}
												Sign Up{" "}
											</NavLink>{" "}
										</li>{" "}
									</>
								)}{" "}
							</ul>{" "}
						</nav>{" "}
					</div>{" "}
				</div>{" "}
			</div>{" "}
		</header>
	);
};
export default Navbarmenu;
