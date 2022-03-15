import React, { useEffect, useRef } from "react";
import { AUTHORS } from "../../utils/constants";
import { MessageList } from "../MessageList";
import { FormMui } from "../FormMui";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageWithThunk } from "../../store/messages/actions";
import "../../App.css";

export function Chat() {
  const { chatId } = useParams();

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

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
    dispatch(addMessageWithThunk(chatId, newMsg));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
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
