import "../App.css";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import List from "./List";

function Home(props) {
  const { userNameInput } = props;
  const [tweetsArray, setTweetsArray] = useState([]);
  const [serverTweetsArray, setServerTweetsArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState(false);

  useEffect(() => {
    if (tweetsArray[0]) {
      setServerErrorMessage(false);
      setIsDisabled(true);
      fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tweetsArray[tweetsArray.length - 1]),
        }
      ).then((response) => {
        if (response) {
          if (!response.ok) {
            setServerErrorMessage(true);
          }
        }
      });

      setLoading(false);
      setIsDisabled(false);
    }
  }, [tweetsArray]);

  useEffect(() => {
    fetch(
      "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
    )
      .then((response) => response.json())
      .then((data) => {
        setServerTweetsArray(data.tweets);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <Tweet
        className="tweet"
        setTweetsArray={setTweetsArray}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
        loading={loading}
        setLoading={setLoading}
        serverErrorMessage={serverErrorMessage}
        setServerErrorMessage={setServerErrorMessage}
        userNameInput={userNameInput}
      />
      <List serverTweetsArray={serverTweetsArray} tweetsArray={tweetsArray} />
    </div>
  );
}

export default Home;
