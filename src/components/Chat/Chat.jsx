import React from "react";
import HeaderChat from "./HeaderChat";
import MessageInp from "./MessageInp";

import "./styleChat.css";

function Chat() {
    return(
        <div className="divChat">
            <HeaderChat></HeaderChat>
            <MessageInp></MessageInp>
        </div>
    )
}

export default Chat;
