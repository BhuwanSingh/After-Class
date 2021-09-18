import React, {useState} from 'react'
import "./StudyRoom.css";
import "./styles.css"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";
var crypto = require("crypto");

const StudyRoom = () => {
    const [url, seturl] = useState("");
    const [copied, setCopied] = useState(false);
    const createURL = () => {
        var id = crypto.randomBytes(20).toString('hex');
        seturl("/whiteboard/"+id)
    }
    return (
        <div className="tt">
            <h1 className="ti">Create whiteboard</h1>
            <button className="bb btn btn-primary" onClick={createURL}>Create whiteboard</button>
            {
                url ?
                    (<div tt>
                       <Link className="white_link" target="_blank" to={url}>Click here to go to your whiteboard</Link>
                        <CopyToClipboard
                            className="ab btn btn-primary"
                            text={url}
                         onCopy={() => {setCopied(true)}}>
                            {copied ?(<button className="ab" style={{backgroundColor:"green"}}>Copied</button>): (<button>Copy</button>) }
                        </CopyToClipboard>
                        
                    </div>)
                    :(null)
            }
        </div>
    )
}

export default StudyRoom;

