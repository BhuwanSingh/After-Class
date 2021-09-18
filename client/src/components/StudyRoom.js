import React, {useState} from 'react'
import "./StudyRoom.css";
var crypto = require("crypto");

const StudyRoom = () => {
    const [url, seturl] = useState("");
    const createURL = () => {
        var id = crypto.randomBytes(20).toString('hex');
        seturl("localhost:3000/whiteboard/"+id)
    }
    return (
        <div className="tt">
            <h1 className="ti">Create whiteboard</h1>
            <button className="bb btn btn-primary" onClick={createURL}>Create whiteboard</button>
            {
                url ?
                    (<div tt>
                        {url}
                    </div>)
                    :(<h1 className="to">(No url generated)</h1>)
            }
        </div>
    )
}

export default StudyRoom;

