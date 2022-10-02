import React from "react";

import "./StatusRecipient.css";


function StatusRecipient({status}){
    // return (
    //     <span className="statusRecipient">{status}</span>
    // )
    if (status.includes("writes")){
        return(<div className="statusRecipient online">
            <span className="writes">{status}</span>
        </div>)
    }
    else if (status.includes("records voice message")) {
        return(<div className="statusRecipient online">
            <span className="records-voice">{status}</span>
        </div>)
    }
    else{
        return(<div className="statusRecipient">
            <span>{status}</span>
        </div>)
    }
}

export default StatusRecipient;