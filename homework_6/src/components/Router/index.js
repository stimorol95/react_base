import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import ConnectedProfile, { Profile } from "../Profile";
import { addChat, deleteChat } from "../../store/chats/actions";
import { useDispatch, useSelector } from "react-redux";


const Home = () => <h3>Home page</h3>;

const inititalChats = [
  {
    name: "Chat 1",
    id: "chat1",
  },
  {
    name: "Chat 2",
    id: "chat2",
  },
  {
    name: "Chat 3",
    id: "chat3",
  },
];

const initialMessages = inititalChats.reduce((acc, el) => {
  acc[el.id] = [];
  return acc;
}, {});

export const Router = () => {
  const [messages, setMessages] = useState(initialMessages);

  const chatList = useSelector((state) => {
    return state.chats
  });
  const dispatch = useDispatch();

  const handleAddMessage = (chatId, newMsg) => {
    setMessages((prevMessageList) => ({
      ...prevMessageList,
      [chatId]: [...prevMessageList[chatId], newMsg],
    }));
  };

  const handleAddChat = (newChatName) => {
    const newId = `chat-${Date.now()}`;

    dispatch(addChat(newId, newChatName));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [newId]: [],
    }));
  };

  const handleDeleteChat = (idToDelete) => {
    dispatch(deleteChat(idToDelete));
    setMessages((prevMessages) => {
      const newMsgs = { ...prevMessages };

      delete newMsgs[idToDelete];
      return newMsgs;
    });
  };

  return (
    <BrowserRouter>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
        >
          home
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
          to="/profile"
        >
          profile
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
          to="/chats"
        >
          chats
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<ConnectedProfile />} />
        <Route path="chats" element={<ChatList onDeleteChat={handleDeleteChat} onAddChat={handleAddChat} chats={chatList} />}>
          <Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage} />} />
        </Route>
        <Route element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
