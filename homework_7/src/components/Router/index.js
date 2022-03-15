import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import ConnectedProfile from "../Profile";


const Home = () => <h3>Home page</h3>;

export const Router = () => {

  return (
      <BrowserRouter>
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
          >
            home
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
            to="/chats"
          >
            chats
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
            to="/profile"
          >
            profile
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ConnectedProfile />} />
          <Route path="chats" element={<ChatList />}>
            <Route path=":chatId" element={<Chat />} />
          </Route>
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
      );
};
