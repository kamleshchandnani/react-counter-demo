import { useState } from "react";

export const Vote = () => {
  const [voteCount, setVoteCount] = useState(0);

  function updateVoteCount(type) {
    if (type === "increment") {
      setVoteCount((currentCount) => currentCount + 1);
    } else if (type === "decrement") {
      setVoteCount((currentCount) => currentCount - 1);
    }
  }
  return (
    <>
      <h3>Vote your opinion</h3>
      <button onClick={() => updateVoteCount("increment")}>
        upvote
        <span role="img" aria-label="thumbs-up">
          {" "}
          👍
        </span>
      </button>
      <p id="counter-value">{voteCount}</p>
      <button onClick={() => updateVoteCount("decrement")}>
        downvote{" "}
        <span role="img" aria-label="thumbs-down">
          👎
        </span>
      </button>
    </>
  );
};
