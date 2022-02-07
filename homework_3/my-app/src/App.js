import React, { useState, useEffect, useRef } from "react";
import './App.css';
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList";
import { FormMui } from "./components/FormMui";
import { ChartList } from "./components/ChartList";

function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();
  const [chats] = useState([
    { id: 1, name: "First_chat" },
    { id: 2, name: "Second_chat" },
    { id: 3, name: "Third_chat" },
  ]);

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 900)
    }
    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="App">
      <ChartList chats={chats} />
      <div className="App-content">
        <MessageList messages={messageList} />
        <div ref={messagesEnd} />
      </div>
      <FormMui onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;
