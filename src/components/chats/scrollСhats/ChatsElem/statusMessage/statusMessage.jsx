import React from "react";

import "./styleStatusMessage.css";

function statusMessage({statusMessage}){
    return(
        <span className="status-message">{statusMessage}</span>
    )
}

export default statusMessage;