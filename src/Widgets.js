import React from 'react';
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";


 function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text"></input>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happpening</h2>
        <TwitterTweetEmbed tweetId="1611073629705408513" />
        <TwitterTimelineEmbed />
        <TwitterShareButton />
      </div>
    </div>
  );
}

 export default Widgets;
