import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Link, Outlet } from "react-router-dom";

const chats = [
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

export const ChatList = () => (
    <>
        <List>
            {chats.map((chat) => (
                <ListItem key={chat.id}>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar />
                        </ListItemAvatar>
                        <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
        <Outlet />
    </>
);

