import React from "react";


import "./styleHeaderChat.css";

function HeaderChat() {
    return(
        <div className="divHeaderChat">
            <div className="PhotoNameOnlineRes">
                <img className="PhotoRes" src="26.svg" alt="" />
                <div className="NameOnline">
                    <span className="NameRes">Nika Jerrado</span>
                    <span className="OnlineRes">last online 5 hours ago</span>
                </div>
            </div>
            <img className="File-add" src="IconFile.svg" alt="" />
            <img className="More" src="IconMore.svg" alt="" />

        </div>
    )
}

export default HeaderChat;