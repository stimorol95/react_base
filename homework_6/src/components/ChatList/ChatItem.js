import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { DeleteButton } from "./DeleteButton";

export const ChatItem = ({ chat, onDeleteChat }) => (
  <ListItem key={chat.id}>
    <ListItemButton>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
    </ListItemButton>
    <DeleteButton id={chat.id} onClick={onDeleteChat} />
  </ListItem >
);
