import React from "react";

import "./styleLastMessage.css";

function LastMessage({lastMessageText}){
    return(
        <span className="lastMessageText">{lastMessageText}</span>
    )
}

export default LastMessage;