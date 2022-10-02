import React from "react";

import "./styleNotReaded.css";

function NotReaded({numberOfNotReaded}){
    if (numberOfNotReaded) {
        return(
        <span className="numberNotReaded">{numberOfNotReaded}</span>
        )
    }
}

export default NotReaded;