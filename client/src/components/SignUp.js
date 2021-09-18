import React, { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const SignUp = () => {
	// const history = useHistory();

	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
		work: "",
		password: "",
		cpassword: "",
	});
	const [register, isRegistered] = useState(false);
	let name, value;

	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	};

	const PostData = async (e) => {
		e.preventDefault();

		const { name, email, phone, work, password, cpassword } = user;
		const username = name;
		const res = await fetch("user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				email,
				phone,
				work,
				password,
				cpassword,
			}),
		});

		const data = await res.json();

		if (data.status === 422 || !data) {
			window.alert("Invalid Registration");
			console.log("Invalid Registration");
		} else {
			// window.alert("Successful Registration");
			// console.log("Successful Registration");
			// history.push("/login");
			isRegistered(true);
		}
	};

	return (
    <Fragment>
      <section>
        <div>
          {register ? (
            <div variant="success">
              Succesfully registered
              <Link to="/login"> click here to LogIn</Link>
            </div>
          ) : (
            <div className="signup-form ">
              <form method="POST" onSubmit={PostData}>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                  <h2 className="h2__form">SignUp</h2>
                  <div className="form-field">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeholder="Your Name"
                      value={user.name}
                      autofocus
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Your Email"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="Your Phone"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      placeholder="Your Profession"
                      value={user.work}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Your Password"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      placeholder="Confirm Your Password"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>
                  <div
                    style={{ display: "inline-block", justifyContent: "center" }}
                    className="form-field"
                  >
                    <input
                      className="bts"
                      type="submit"
                      name="register"
                      id="register"
                      value="Register"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>
              </form>
              <NavLink to="/login" className="signup-image-link mt-10">
                Already have an account?
              </NavLink>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default SignUp;
