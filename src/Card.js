import React from "react";
import "./Card.css";

function Card({
  bgURL,
  color,
  title,
  content1,
  content2,
  content3,
  getResult,
}) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${bgURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderColor: `${color}`,
        color: `${color}`,
      }}
      onClick={getResult}
    >
      <div className="content">
        <h2
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            minHeight: "60px",
          }}
        >
          {title}
        </h2>
        <p
          style={{ marginLeft: "20px", marginTop: "40px", marginRight: "20px" }}
        >
          {content1}
        </p>
        <p style={{ marginLeft: "20px" }}>{content2}</p>
        <p style={{ marginLeft: "20px" }}>{content3}</p>
      </div>
      <button
        className="cardbtn"
        style={{
          borderColor: `${color}`,
          color: `${color}`,
          fontFamily: "inherit",
          fontSize: "20px",
        }}
      >
        Learn more
      </button>
    </div>
  );
}

export default Card;
