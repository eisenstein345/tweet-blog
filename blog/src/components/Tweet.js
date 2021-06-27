import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorMessageDiv from "./ErrorMessageDiv";

function Tweet(props) {
  const {
    userNameInput,
    setTweetsArray,
    isDisabled,
    setIsDisabled,
    loading,
    setLoading,
    serverErrorMessage,
    setServerErrorMessage,
  } = props;
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [userName, setUserName] = useState();
  const [tweetData, setTweetData] = useState({});
  const [maxChars, setMaxChars] = useState(false);
  const nameData = localStorage.getItem("userName");

  const handleInputTweet = (e) => {
    setServerErrorMessage(false);
    setContent(e.target.value);
  };

  useEffect(() => {
    const newDate = new Date();
    setTweetData({
      userName: JSON.parse(nameData),
      content: content,
      date: newDate.toISOString(),
      id: uuidv4(),
    });
  }, [content, date, userName]);

  useEffect(() => {
    let length = content.length;
    if (!tweetData.content) {
      setMaxChars(false);
      setIsDisabled(true);
    } else if (length <= 140) {
      setMaxChars(false);
      setIsDisabled(false);
    } else {
      setMaxChars(true);
      setIsDisabled(true);
    }
  }, [tweetData, content.length]);

  const handleClick = () => {
    setLoading(true);
    setTweetsArray((prevState) => {
      return [tweetData, ...prevState];
    });

    setTweetData({});
    setContent("");
    setUserName("Name");
    setDate("");
  };

  return (
    <div className="tweet">
      <div className="input-tweet-wrapper">
        <textarea
          placeholder="What do you have in mind..."
          type="text"
          value={content}
          className="input-tweet"
          onInput={handleInputTweet}
        ></textarea>
        <div className="button-wrapper">
          <div className={`max-chars message-${maxChars}`}>
            The Tweet can't contain more than 140 Chars.
          </div>

          {!loading && (
            <button
              disabled={isDisabled}
              className={`input-tweet-button input-tweet-button-${isDisabled}`}
              onClick={handleClick}
            >
              Tweet
            </button>
          )}
          {loading && (
            <div className="input-tweet-button lds-ripple">
              <div></div>
              <div></div>
            </div>
          )}
          <div className="server-error-wrapper">
            {serverErrorMessage && (
              <ErrorMessageDiv message="Server error: Tweet hasn't been added to server" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
