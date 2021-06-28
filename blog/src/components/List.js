import AppContext from "../context/AppContext";
import { useContext } from "react";

function List() {
  const appContext = useContext(AppContext);

  return (
    <>
      <div className="list">
        {appContext.tweetsArray.map((tweet) => {
          return (
            <div key={tweet.id} className="list-item">
              <div className="user-date">
                <div>{tweet.userName}</div>
                <div>{tweet.date}</div>
              </div>
              <div className="tweet-item">{tweet.content}</div>
            </div>
          );
        })}
        {appContext.serverTweetsArray.map((tweet) => {
          return (
            <div key={tweet.id} className="list-item">
              <div className="user-date">
                <div>{tweet.userName}</div>
                <div>{tweet.date}</div>
              </div>
              <div className="tweet-item">{tweet.content}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
