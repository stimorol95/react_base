import React, { useState } from "react";
import './App.css';
import { Message } from "./components/Message";
import { useEffect } from "react/cjs/react.development";
import { Form } from "./components/Form";

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (text) => {
    setMessageList((prevMessageList) => [...prevMessageList, { text: text, author: 'Me' }]);
  };

  useEffect(() => {
    if (messageList[messageList.length - 1]?.author === 'Me') {
      setTimeout(() => {
        setMessageList((prevMessageList) => [...prevMessageList, { text: "bot words", author: 'Bot' }]);
      }, 900)
    }
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        {messageList.map((text, index) => (
          <Message key={index} text={text.text} author={text.author} />
        ))}
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
}

export default App;
