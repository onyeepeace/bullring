import React from "react";
import "./twitter.css";

function Twitter({ data }) {
  return (
    <div>
      <div className="twitter">
        <div className="twitter-overlay">
          <img src="./twitter.png" alt="twitter logo" />
        </div>
        <h3 className="twitter-username">{data.item_data.user.username}</h3>
        <p className="twitter-text">{data.item_data.tweet}</p>
      </div>
    </div>
  );
}

export default Twitter;
