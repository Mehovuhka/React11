import React from "react";

import "./styleScrollChats.css";
import ChatsElem from "./ChatsElem";

const infoChats = [
    {href: "/chats/1", className: "chatsElem", photo: "/24.svg", name: "Lui Robin", isOnline: true, status: "writes", statusMessage: "1 minute ago", lastMessageText: "Это полностью адекватный текст, написанный полностью неадекватным человеком. Все совпадения специальны. Все права свободны.",numberOfNotReaded: "2"}, 
    {href: "/chats/2", className: "chatsElem", photo: "/25.svg", name: "Jared Sunn", isOnline: true, status: "records voice message", statusMessage: "1 minute ago", lastMessageText: "Это полностью адекватный текст, написанный полностью неадекватным человеком. Все совпадения специальны. Все права свободны.",numberOfNotReaded: "1"}, 
    {href: "/chats/3", className: "chatsElem", photo: "/26.svg", name: "Nika Jerrado", isOnline: false, status: "last online 5 hours ago", statusMessage: "3 days ago", lastMessageText: "Это полностью адекватный текст, написанный полностью неадекватным человеком. Все совпадения специальны. Все права свободны.",numberOfNotReaded: null}, 
    {href: "/chats/4", className: "chatsElem", photo: "/27.svg", name: "David Amrosa", isOnline: false, status: "last online 5 hours ago", statusMessage: "3 days ago", lastMessageText: "Это полностью адекватный текст, написанный полностью неадекватным человеком. Все совпадения специальны. Все права свободны.",numberOfNotReaded: "2"} 
]

function ScrollChats(){
    return (
        <ul className="all-chats">
            {infoChats.map(({ href, className, photo, name, isOnline, status, statusMessage, lastMessageText, numberOfNotReaded }) => (
                <li key={href} className="chatsElem">
                <ChatsElem
                    href={href}
                    className={className}
                    photo={photo}
                    name={name} 
                    isOnline={isOnline}
                    status={status}
                    statusMessage={statusMessage}
                    lastMessageText={lastMessageText}
                    numberOfNotReaded={numberOfNotReaded}
                />
                </li>
            ))}
        </ul>
    )
} 

export default ScrollChats;