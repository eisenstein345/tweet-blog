import "./App.css";
import { useState } from "react";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import AppContext from "./context/AppContext";

function App() {
  const [userNameInput, setUserNameInput] = useState("");
  const [tweetsArray, setTweetsArray] = useState([]);
  const [serverTweetsArray, setServerTweetsArray] = useState([]);
  const [serverErrorMessage, setServerErrorMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshData, setRefreshData] = useState(false);

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#6c757d",
  };

  return (
    <Router>
      <AppContext.Provider
        value={{
          userNameInput: userNameInput,
          setUserNameInput: setUserNameInput,
          tweetsArray: tweetsArray,
          setTweetsArray: setTweetsArray,
          isDisabled: isDisabled,
          setIsDisabled: setIsDisabled,
          loading: loading,
          setLoading: setLoading,
          serverErrorMessage: serverErrorMessage,
          setServerErrorMessage: setServerErrorMessage,
          serverTweetsArray: serverTweetsArray,
          setServerTweetsArray: setServerTweetsArray,
          refreshData: refreshData,
          setRefreshData: setRefreshData,
        }}
      >
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
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
