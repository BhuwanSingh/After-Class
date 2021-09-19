import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../img/default.png';
export const LogIn = ({ setloggedin }) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginUser = async (e) => {
		e.preventDefault();

		const res = await fetch('user/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await res.json();

		if (data.status === 400 || !data) {
			window.alert('Invalid Credentials');
			console.log('Invalid Credentials');
		} else {
			localStorage.setItem('email', email);
			const res2 = await fetch(`/user/${localStorage.getItem('email')}`, {
				method: 'GET',
			});
			const data2 = await res2.json();
			localStorage.setItem('username', data2[0].username);
			// console.log('username: ' + localStorage.getItem('username'));
			// console.log('email: ' + localStorage.getItem('email'));
			// console.log('Successful Login');
			setloggedin(email);
			if (localStorage.getItem('username')) history.push('/');
		}
	};

	return (
    <Fragment>
      <section>
        <div>
          <div className="login-form">
            <form method="POST" onSubmit={loginUser}>
              <div className="col">
                <h2 className="h2__form ">Login</h2>
                <div className="login-img" style={{ padding: "1rem" }}>
                  <img src={logo} alt="loginbud" />
                </div>
                <div className="form-field">
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
                    className="bts"
                    type="submit"
                    name="signin"
                    id="signin"
                    value="Sign In"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
            </form>
            <NavLink to="/SignUp" className="signup-image-link">
              New here?
            </NavLink>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LogIn;
