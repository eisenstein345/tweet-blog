import "../App.css";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function Profile(props) {
  const { userNameInput, setUserNameInput } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const handleUserName = (e) => {
    setUserNameInput(e.target.value);
  };

  useEffect(() => {
    if (!userNameInput) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [userNameInput]);

  const handleClick = () => {
    localStorage.setItem("userName", JSON.stringify(userNameInput));
    setTimeout(() => {
      setRedirect(true);
    }, [2000]);

    return userNameInput;
  };

  return (
    <div className="tweet">
      {redirect && <Redirect to="/" />}
      <div className="profile">
        <div className="profile-text">Profile</div>
      </div>
      <div className="profile-wrapper">
        <div className="user">User Name</div>
        <textarea
          placeholder="Enter your name..."
          type="text"
          value={userNameInput}
          className="input-name"
          onInput={handleUserName}
        ></textarea>
        <div className="button-wrapper">
          <button
            disabled={isDisabled}
            className={`input-tweet-button input-tweet-button-${isDisabled}`}
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
