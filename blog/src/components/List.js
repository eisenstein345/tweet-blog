function List(props) {
  const { tweetsArray, serverTweetsArray } = props;

  return (
    <>
      <div className="list">
        {tweetsArray.map((tweet) => {
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
        {serverTweetsArray.map((tweet) => {
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
