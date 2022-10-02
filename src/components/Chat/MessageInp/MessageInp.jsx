import React from "react";

import "./styleMessageInp.css";

function MessageInp() {
    return(
        <div className="divMessageInp">
            <img className="addFiles" src="IconAdd.svg" alt="" />
            <input className="inputMess" type="text" name="" id="" placeholder="Type a message here"/>
            <img className="addSmiles" src="Smiles.svg" alt="" />
            <img className="sendMess" src="Send.svg" alt="" />
        </div>
    )
}

export default MessageInp;