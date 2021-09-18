import React, {useEffect, useState} from 'react';
import logo from "./../../img/download.png";
import "./profile.css";
let data

const Profile = ({loggedin}) => {

    const [d, setd] = useState({})

    // if (loggedin) {
    //     const about = async () => {
	// 	        const res = await fetch(`user/${loggedin}`, {
    //             method: "GET",
    //         });
    //         const data = await res.json();
    //         console.log(data)
           
    //     };
    // }


    useEffect(() => {
    (async () => {

        const about = async () => {
		        const res = await fetch(`/user/${localStorage.getItem('email')}`, {
                method: "GET",
            });
            data = await res.json();
            // console.log("got data "+data)
            console.log(data[0])
            setd(data[0])
        };

        about();

    })();
        console.log(localStorage.getItem('email'));
  }, []);

    return (
        <div >
            <div className="profile-container">
                <div className="profile-image-container">
                    <img src={logo} alt="img"/>
                    <div><h3>Created  </h3> {d.created}</div>
                </div>
                <div className="profile-details-container">
                    <div className="profile-details-sub"><h3>Name</h3><h3>{d.username}</h3></div>
                    <div className="profile-details-sub"><h3>Email</h3><h3>{d.email}</h3></div>
                    <div className="profile-details-sub"><h3>Contact</h3><h3>{d.phone}</h3></div>
                    {/*<div><h3>Saved Post</h3>d.s</div>*/}
                    <div className="profile-details-sub"><h3>Experience </h3><h3>{d.experience}</h3></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
