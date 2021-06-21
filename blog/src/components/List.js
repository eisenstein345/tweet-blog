function List(props) {
  const { tweetsArray } = props;

  return (
    <>
      <div className="list">
        {tweetsArray.map((tweet, index) => {
          return (
            <div key={tweet.id} className="list-item">
              <div className="user-date">
                <div>{tweet.userName}</div>
                <div>{tweet.date}</div>
              </div>
              <div className="tweet-item">{tweet.tweet}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
