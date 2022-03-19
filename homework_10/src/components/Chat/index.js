import React, { useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router";
import "../../App.css";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../MessageList";
import { FormMui } from "../FormMui";
import {
  onChildAdded,
  onChildRemoved,
  onValue,
  push,
  set,
} from "@firebase/database";

import {
  getMessageListRefByChatId,
  getMessageRefById,
  getMessagesRefByChatId,
} from "../../services/firebase";

export function Chat() {
  const { chatId } = useParams();

  const [messages, setMessages] = useState([]);

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
    set(getMessageRefById(chatId, newMsg.id), newMsg);
  };

  useEffect(() => {
    const unsubscribe = onValue(getMessagesRefByChatId(chatId), (snapshot) => {
      if (!snapshot.val()?.empty) {
        setMessages(null);
      }
    });

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildAdded(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        console.log(snapshot.val());
        setMessages((prevMessages) => [...prevMessages, snapshot.val()]);
      }
    );

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    const unsubscribe = onChildRemoved(
      getMessageListRefByChatId(chatId),
      (snapshot) => {
        console.log(snapshot.val());
        setMessages((prevMessages) =>
          prevMessages.filter(({ id }) => id !== snapshot.val()?.id)
        );
      }
    );

    return unsubscribe;
  }, [chatId]);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
  }, [messages]);

  if (!messages) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <div className="App">
      <div>
        <div className="App-content">
          <MessageList messages={messages} />
        </div>
        <FormMui onSubmit={handleAddMessage} />
      </div>
    </div>
  );
}
