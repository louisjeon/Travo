import React from "react";
import "./Info.css";
import { useStateValue } from "./StateProvider";

function Info({ color }) {
  const [{ user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div
      className="info"
      style={{ borderColor: `${color}`, color: `${color}` }}
    >
      <div
        className="infoInner"
        style={{
          marginLeft: "30vw",
          display: "flex",
          marginTop: "18vh",
          flexDirection: "column",
        }}
      >
        <div className="infoBottom" style={{ display: "flex" }}>
          <img
            src={process.env.PUBLIC_URL + `/Eunbae_Jeon.jpg`}
            style={{
              border: `2px solid ${color}`,
              borderRadius: "50px",
              alignSelf: "center",
              height: "200px",
            }}
            alt=""
          />
          <div className="specific">
            <h1
              style={{ marginLeft: "2vw", fontSize: "40px", marginBottom: "0" }}
            >
              Developer: <br />
              Eunbae Jeon
            </h1>
            <h2 style={{ marginLeft: "2vw" }}>
              Github: https://github.com/7louisjeon
            </h2>
            <h2 style={{ marginLeft: "2vw" }}>Project name: Travo</h2>
            <h2 style={{ marginLeft: "2vw" }}>Published on: 10/30/2020</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
