import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export const ChartList = ({ chats }) => {
    return (
        <List>
            {chats.map((chat) => {
                return (
                    <ListItem key={chat.id}>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={chat.name} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}
