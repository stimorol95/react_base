import React from "react";
import "./styles.css";

export class Message extends React.Component {
  render() {
    const { author, text } = this.props;
    return <span className="message"> {author}: The message is {text}</span>;
  }
}
