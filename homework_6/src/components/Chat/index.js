import React, { useState, useEffect, useRef } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../MessageList";
import { FormMui } from "../FormMui";
import { Navigate, useParams } from "react-router-dom";

import "../../App.css";

export function Chat({ messages, addMessage }) {
  const params = useParams();
  const { chatId } = params;

  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    addMessage(chatId, newMsg);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messages[chatId]?.[messages[chatId]?.length - 1]?.author ===
      AUTHORS.ME
    ) {
      timeout = setTimeout(() => {
        sendMessage("I m bot", AUTHORS.BOT);
      }, 650);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <div>
        <div className="App-content">
          <MessageList messages={messages[chatId]} />
        </div>
        <FormMui onSubmit={handleAddMessage} />
      </div>
    </div>
  );
}
