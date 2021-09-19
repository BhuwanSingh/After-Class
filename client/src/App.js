import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Doubt from './components/Doubt';
import NEET from './components/NEET';
import JEE from './components/JEE';
import LogIn from './components/LogIn';
import Navbarmenu from './components/menu/Navbarmenu';
import StudyRoom from './components/StudyRoom';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import BTech from './components/BTech';
import CAT from './components/CAT';
import CBSE from './components/CBSE';
import CLAT from './components/CLAT';
import IAS from './components/IAS';
import WhiteBoard from './components/WhiteBoard';
import Error404 from './components/Pages/Error404';
import OCR from './components/OCR';
import Footer from './components/Footer';
import Contactus from './components/contactus';
import Profile from './components/Pages/Profile';
import Write from './components/write/Write';
import BookPosts from './components/buysell/bookposts/BookPosts';
function App() {
	const [loggedin, setloggedin] = useState('');
	return (
		<div>
			<Router basename='/'>
				{/* Add Menu Component */}
				{window.location.pathname.match('/whiteboard') ? null : <Navbarmenu />}

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/Doubt' component={Doubt} />
					<Route path='/NEET' component={NEET} />
					<Route path='/JEE' component={JEE} />
					<Route path='/BTech' component={BTech} />
					<Route path='/CLAT' component={CLAT} />
					<Route path='/CAT' component={CAT} />
					<Route path='/CBSE' component={CBSE} />
					<Route path='/IAS' component={IAS} />
					<Route
						path='/LogIn'
						render={(props) => <LogIn setloggedin={setloggedin} />}
					/>
					<Route path='/SignUp' component={SignUp} />
					<Route path='/StudyRoom' component={StudyRoom} />
					<Route path='/Write' component={Write} />
					<Route path='/Chat' component={Chat} />
					<Route path='/WhiteBoard' component={WhiteBoard} />
					<Route path='/OCR' component={OCR} />
					<Route path='/ContactUs' component={Contactus} />
					<Route path='/bookposts' component={BookPosts} />
					<Route
						path='/Profile'
						render={(props) => <Profile loggedin={loggedin} />}
					/>
					<Route component={Error404} />
					<Footer />
				</Switch>
			</Router>
		</div>
	);
}
export default App;
