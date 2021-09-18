import React, {useState} from 'react'
import "./StudyRoom.css";
import "./styles.css"
import {CopyToClipboard} from 'react-copy-to-clipboard';
var crypto = require("crypto");

const StudyRoom = () => {
    const [url, seturl] = useState("");
    const [copied, setCopied] = useState(false);
    const createURL = () => {
        var id = crypto.randomBytes(20).toString('hex');
        seturl("localhost:3000/whiteboard/"+id)
    }
    return (
      <div className="whiteboard__con">
        <h1 className="whiteboard__title">Create whiteboard</h1>
        <button className="btn btn-primary btn__whiteboard" onClick={createURL}>
          Create whiteboard
        </button>
        
          {url ? (
            <div className="tt">
              {url}
              <CopyToClipboard
                className="btn btn-primary btn__link"
                text={url}
                onCopy={() => {
                  setCopied(true);
                }}
              >
                {copied ? (
                  <button style={{ backgroundColor: "green" }}>Copied</button>
                ) : (
                  <button>Copy</button>
                )}
              </CopyToClipboard>
            </div>
          ) : (
            <h1 className="to">(No url generated)</h1>
          )}
       
      </div>
    );
}

export default StudyRoom;

