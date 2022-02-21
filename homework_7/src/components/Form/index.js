import { useState } from "react";
import './style.css'

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} placeholder="Your msg: " type="text" />
      <input className="button" type="submit" />
    </form>
  );
};
