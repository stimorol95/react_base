import React from "react";
import "./styles.css";

export const Message = ({ text, author }) => {
    return (
      <div>
        <span className="message">
          {author}: The message is {text}
        </span>
      </div>
    );
  };
