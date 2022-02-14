import { Message } from "../Message";
import PropTypes from "prop-types";

export const MessageList = ({ messages }) => {
  return messages.map((message) => (
    <div key={message.id}>
      <Message text={message.text} author={message.author} />
    </div>
  ));
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
