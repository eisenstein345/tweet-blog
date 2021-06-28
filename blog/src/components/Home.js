import "../App.css";
import { useEffect, useContext } from "react";
import Tweet from "./Tweet";
import List from "./List";
import AppContext from "../context/AppContext";

function Home(props) {
  const appContext = useContext(AppContext);

  useEffect(() => {
    if (appContext.tweetsArray[0]) {
      appContext.setServerErrorMessage(false);
      appContext.setIsDisabled(true);
      fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            appContext.tweetsArray[appContext.tweetsArray.length - 1]
          ),
        }
      ).then((response) => {
        if (response) {
          if (!response.ok) {
            appContext.setServerErrorMessage(true);
          }
        }
      });

      appContext.setLoading(false);
      appContext.setIsDisabled(false);
    }
  }, [appContext.tweetsArray]);

  useEffect(() => {
    fetch(
      "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
    )
      .then((response) => response.json())
      .then((data) => {
        appContext.setTweetsArray([]);
        appContext.setServerTweetsArray(data.tweets);
      });
  }, [appContext.serverTweetsArray]);

  return (
    <div className="page-wrapper">
      <Tweet className="tweet" />
      <List />
    </div>
  );
}

export default Home;
