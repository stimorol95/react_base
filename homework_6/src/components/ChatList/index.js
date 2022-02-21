import React from "react";
import List from '@mui/material/List';
import { Outlet } from "react-router-dom";
import { ChatItem } from "./ChatItem";
import { FormMui } from "../FormMui";

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => (
    <>
        <List>
            {chats.map((chat) => (
                <ChatItem chat={chat} onDeleteChat={onDeleteChat} />
            ))}
        </List>
        <FormMui onSubmit={onAddChat} />
        <Outlet />
    </>
);

