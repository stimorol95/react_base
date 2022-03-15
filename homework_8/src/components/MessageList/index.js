import { Message } from "../Message";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteMessage, editMessage } from "../../store/messages/actions";

export const MessageList = ({ messages }) => {
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMessage(chatId, id));
  };

  const handleEdit = (id) => {
    dispatch(editMessage(chatId, id, "edited"));
  };
  return messages.map((message) => (
    <div key={message.id}>
      <Message text={message.text} author={message.author} />
      <button onClick={() => handleDelete(message.id)}>Delete</button>
      <button onClick={() => handleEdit(message.id)}>Edit</button>
    </div>
  ));
};


Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
