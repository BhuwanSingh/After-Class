import React, {useEffect, useState} from 'react';
import logo from "./../../img/default.png";
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
      <div>
        <div className="profile-container">
         
          <div className="profile-image-container">
            <div className="photo-con">
              <img src={logo} alt="img" className="profile-img" />
            </div>
            <div>
              <h3 className="profile__heading"> Created </h3> {d.created}{" "}
            </div>
          </div>
          <div className="profile-details-container">
            <div className="profile-details-sub1">
              <p>Name :</p>
              <p>{d.username}</p>
            </div>
            <div className="profile-details-sub">
              <p>Email :</p>
              <p>{d.email}</p>
            </div>
            <div className="profile-details-sub1">
              <p>Contact :</p>
              <p>{d.phone}</p>
            </div>
            {/*<div><h3>Saved Post</h3>d.s</div>*/}
            <div className="profile-details-sub">
              <p>Experience :</p>
              <p>{d.experience}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile;
