import React from "react";
import "./ChatBubble.css";

const ChatBubble = ({ message, isSender }) => {
    return (
        <div className={`chat-bubble ${isSender ? "sender" : "receiver"}`}>
            {message}
        </div>
    );
};

export default ChatBubble;
