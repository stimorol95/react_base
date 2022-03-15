import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { initChatsTracking } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";
import { set } from "@firebase/database";
import {
    getChatsRefById,
    getMessagesRefByChatId,
} from "../../services/firebase";

export const ChatList = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        set(getChatsRefById(newId), { id: newId, name: newChatName });
        set(getMessagesRefByChatId(newId), { empty: true });
    };

    useEffect(() => {
        dispatch(initChatsTracking());
    }, []);

    return (
        <>
            <List>
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} />
                ))}
            </List>
            <FormMui onSubmit={handleAddChat} />
            <Outlet />
        </>
    );
};


