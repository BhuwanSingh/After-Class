import React, {useEffect, useState} from 'react'
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
        <div style={{color:"white"}}>
            <div>
                <div>
                    image
                    <div><h3>Created  </h3> {d.created}</div>
                </div>
                <div>
                    <div><h3>Name</h3>{d.username}</div>
                    <div><h3>Email</h3>{d.email}</div>
                    <div><h3>Contact</h3>{d.phone}</div>
                    {/*<div><h3>Saved Post</h3>d.s</div>*/}
                    <div><h3>Experience </h3>{d.experience}</div>
                </div>
            </div>
        </div>
    )
}

export default Profile
