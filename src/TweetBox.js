import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import {db} from "./Firebase/init"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  // prevents refresh on page:
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("post").add({
      displayName: "Maurice Glenn",
      username: "MoeCodes",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: <Avatar src={require("./Assets/5528.jpeg")} />,
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={require("./Assets/5528.jpeg")} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
          variant="outlned"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
