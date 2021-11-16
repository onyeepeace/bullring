import React from "react";
import "./instagram.css";

function Instagram({ data }) {
  return (
    <div>
      <div className="instagram">
        <div className="overlay instagram-overlay">
          <img src="./instagram.png" alt="instagram logo" />
        </div>
        <img
          src="https://images.unsplash.com/photo-1633114074431-746f5b25ec85?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          alt="black girl"
          loading="lazy"
        />
        <h3 className="instagram-username">{data.item_data.user.username}</h3>
        <p className="instagram-text">{data.item_data.caption}</p>
      </div>
    </div>
  );
}

export default Instagram;
