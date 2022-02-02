import logo from './logo.svg';
import './App.css';
import { Message } from "./components/Message";

const myText = "My react app";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message
          myString="my string"
          text={myText}
        />
      </header>
    </div>
  );
}

export default App;
