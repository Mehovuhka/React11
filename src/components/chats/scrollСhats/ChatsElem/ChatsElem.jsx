import React from "react";
import { NavLink } from "react-router-dom";
import LastMessage from "./lastMessage";
import NameRecipient from "./nameRecipient";
import NotReaded from "./NotReaded";
import PhotoRecipient from "./PhotoRecipient";
import StatusMessage from "./statusMessage";
import StatusRecipient from "./StatusRecipient";

import "./chatElemStyle.css";

function ChatElem({
  href, 
  className,
  photo,
  name,
  isOnline,
  status,
  statusMessage,
  lastMessageText,
  numberOfNotReaded
}) {
  return (
    <NavLink to={href} className={({ isActive }) => (isActive ? `selected-chat` : ``)}>
      <div className="all-about">
        <PhotoRecipient photo={photo}></PhotoRecipient>
        <div className="about-user">
          <NameRecipient name={name}></NameRecipient>
          <StatusRecipient status={status}></StatusRecipient>
        </div>
        <StatusMessage statusMessage={statusMessage}></StatusMessage>
      </div>
      <LastMessage lastMessageText={lastMessageText}></LastMessage>
      <NotReaded numberOfNotReaded={numberOfNotReaded}></NotReaded>
    </NavLink>
  );
}

export default ChatElem;
