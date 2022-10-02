import React from "react";

import "./stylePhotoRecipient.css";

function PhotoRecipient({photo}){
    return (
        <img src={photo} alt="" />
    )
}

export default PhotoRecipient;