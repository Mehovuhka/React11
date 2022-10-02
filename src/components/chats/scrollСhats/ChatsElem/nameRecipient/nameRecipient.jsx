import React from "react";

import "./styleNameRecipient.css";

function nameRecipient({name}){
    return(
        <span className="nameRecipient">{name}</span>
    )
}

export default nameRecipient;