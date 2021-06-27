import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#6c757d",
  };

  return (
    <Router>
      <div className="navbar">
        <nav>
          <NavLink
            style={linkStyle}
            activeStyle={{ color: "white" }}
            to="/home"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            style={linkStyle}
            activeStyle={{ color: "white" }}
            to="/profile"
          >
            {" "}
            Profile
          </NavLink>
        </nav>
      </div>
      <Route exact path="/home">
        <Home userNameInput={userNameInput} />
      </Route>

      <Route exact path="/profile">
        <Profile
          userNameInput={userNameInput}
          setUserNameInput={setUserNameInput}
        />
      </Route>
    </Router>
  );
}

export default App;
