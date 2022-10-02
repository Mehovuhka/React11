import React from "react";
import Top from "./top";
import ScrollChats from "./scrollСhats/scrollChats";
import SearchChat from "./search";

import "./chatsStyle.css";

function ChatsMenu() {
  return (
    <div className="chatsMenu">
      <Top></Top>
      <div className="scroll">
        <SearchChat></SearchChat>
        <ScrollChats></ScrollChats>
      </div>
    </div>
  );
}

export default ChatsMenu;
