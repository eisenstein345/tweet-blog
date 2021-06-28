import "../App.css";
import { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../context/AppContext";

function Profile() {
  const appContext = useContext(AppContext);
  const [isProfileDisabled, setIsProfileDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const handleUserName = (e) => {
    appContext.setUserNameInput(e.target.value);
  };

  useEffect(() => {
    if (!appContext.userNameInput) {
      setIsProfileDisabled(true);
    } else {
      setIsProfileDisabled(false);
    }
  }, [appContext.userNameInput]);

  const handleClick = () => {
    localStorage.setItem("userName", JSON.stringify(appContext.userNameInput));
    setTimeout(() => {
      setRedirect(true);
    }, [2000]);

    return appContext.userNameInput;
  };

  return (
    <div className="tweet">
      {redirect && <Redirect to="/home" />}
      <div className="profile">
        <div className="profile-text">Profile</div>
      </div>
      <div className="profile-wrapper">
        <div className="user">User Name</div>
        <textarea
          placeholder="Enter your name..."
          type="text"
          value={appContext.userNameInput}
          className="input-name"
          onChange={handleUserName}
        ></textarea>
        <div className="button-wrapper">
          <button
            disabled={isProfileDisabled}
            className={`input-tweet-button input-tweet-button-${isProfileDisabled}`}
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
