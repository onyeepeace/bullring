import React from "react";
import "./manual.css";

function Manual({ data }) {
  return (
    <div>
      <div className="manual">
        <div className="overlay manual-overlay">AFF</div>
        <img
          src="https://images.unsplash.com/photo-1587088155172-e9355df99c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80"
          alt="runway fashion"
          loading="lazy"
        />
        <p className="manual-text">{data.item_data.text}</p>
        <a
          className="manual-link"
          href={data.item_data.link}
          target="_blank"
          rel="noreferrer"
        >
          {data.item_data.link_text}
        </a>
      </div>
    </div>
  );
}

export default Manual;
