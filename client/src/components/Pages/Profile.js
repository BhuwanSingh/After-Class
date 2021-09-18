import React,{useEffect} from 'react'

const Profile = (loggedin) => {

    
    // if (loggedin) {
    //     const about = async () => {
	// 	        const res = await fetch(`user/${loggedin}`, {
    //             method: "GET",
    //         });
    //         const data = await res.json();
    //         console.log(data)
           
    //     };
    // }
    let list = [];
    useEffect(() => {
    (async () => {

        const about = async () => {
		        const res = await fetch(`user/${loggedin}`, {
                method: "GET",
            });
            const data = await res.json();
            console.log("got data "+data)
            list.push(data);
        };
        about();
    
     
    })();
  }, [loggedin]);

    return (
        <div style={{color:"white"}}>
            <div>
                <div>
                    image
                    <div><h3>Created  </h3> {list.created}</div>
                </div>
                <div>
                    <div><h3>Name</h3>{list.username}</div>
                    <div><h3>Email</h3></div>
                    <div><h3>Contact</h3></div>
                    <div><h3>Saved Post</h3></div>
                    <div><h3>Experience </h3></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
