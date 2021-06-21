import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Tweet(props) {
  const { setTweetsArray } = props;
  const [tweet, setTweet] = useState("");
  const [date, setDate] = useState("");
  const [userName, setUserName] = useState("Name");
  const [isDisabled, setIsDisabled] = useState();
  const [tweetData, setTweetData] = useState({});
  const [maxChars, setMaxChars] = useState(false);

  const handleInputTweet = (e) => {
    setTweet(e.target.value);
  };

  useEffect(() => {
    const newDate = new Date();
    setTweetData({
      userName: userName,
      tweet: tweet,
      date: newDate.toUTCString(),
      id: uuidv4(),
    });
  }, [tweet, date, userName]);

  useEffect(() => {
    let length = tweet.length;
    if (!tweetData.tweet) {
      setMaxChars(false);
      setIsDisabled(true);
    } else if (length <= 140) {
      setMaxChars(false);
      setIsDisabled(false);
    } else {
      setMaxChars(true);
      setIsDisabled(true);
    }
  }, [tweetData, tweet.length]);

  const handleClick = () => {
    setTweetsArray((prevState) => {
      return [tweetData, ...prevState];
    });
    setTweetData({});
    setTweet("");
    setUserName("Name");
    setDate("");
  };

  return (
    <div className="tweet">
      <div className="input-tweet-wrapper">
        <textarea
          placeholder="What do you have in mind..."
          type="text"
          value={tweet}
          className="input-tweet"
          onInput={handleInputTweet}
        ></textarea>
        <div className="button-wrapper">
          <div className={`max-chars message-${maxChars}`}>
            The Tweet can't contain more than 140 Chars.
          </div>
          <button
            disabled={isDisabled}
            className={`input-tweet-button input-tweet-button-${isDisabled}`}
            onClick={handleClick}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
