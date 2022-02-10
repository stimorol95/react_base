import React, { useState, useEffect, useRef } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../MessageList";
import { FormMui } from "../FormMui";
import { Navigate, useParams } from "react-router-dom";

import "../../App.css";

const chats = [{ id: "chat1" }];
const messages = {
  chat1: [],
}; 

export function Chat() {
  const params = useParams();
  const { chatId } = params;

  const [messageList, setMessageList] = useState({
    chat1: [
      { id: "a1", author: "Artem", text: "Hello!" },
      { id: "a11", author: "Bot", text: "Connect" },
    ],
    chat2: [
      { id: "a2", author: "Arnis", text: "Hello!" },
      { id: "a22", author: "Bot", text: "Connect" },
    ],
    chat3: [
      { id: "a3", author: "Temik", text: "Hello!" },
      { id: "a33", author: "Bot", text: "Connect" },
    ],
  });
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
    setMessageList((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.author ===
      AUTHORS.ME
    ) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 650);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <div>
        <div className="App-content">
          <MessageList messages={messageList[chatId]} />
        </div>
        <FormMui onSubmit={handleAddMessage} />
      </div>
    </div>
  );
}
