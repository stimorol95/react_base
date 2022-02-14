import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

import "./styles.css";

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const textField = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <TextField className ="myTxtField" value={value} onChange={handleChange} ref={textField} />
      <Button className ="myBtn" type="submit" variant="contained">Send</Button>
    </form>
  );
};
