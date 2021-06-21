import "./App.css";
import { useEffect, useState } from "react";
import Tweet from "./components/Tweet";
import List from "./components/List";
import GetLocalData from "./components/GetLocalData";

function App() {
  const [tweetsArray, setTweetsArray] = useState(GetLocalData);

  useEffect(() => {
    localStorage.setItem("tweetsArray", JSON.stringify(tweetsArray));
  }, [tweetsArray]);

  return (
    <div className="page-wrapper">
      <Tweet className="tweet" setTweetsArray={setTweetsArray} />
      <List tweetsArray={tweetsArray} setTweetsArray={setTweetsArray} />
    </div>
  );
}

export default App;
