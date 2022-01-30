import React from "react";
import "./styles.css";

export class Message extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <h3 className="header">
        Message Text, {text}
      </h3>
    );
  }
}
