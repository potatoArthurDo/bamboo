import React from "react";
import "./ChatBubble.css";

const ChatBubble = ({ message, isSender, sender }) => {
    return (
        <div className={`chat-bubble ${isSender ? "sender" : "receiver"}`}>
            {message}
            {isSender && ( <p className="sender-name">- {sender}</p>)}
        </div>
    );
};

export default ChatBubble;
