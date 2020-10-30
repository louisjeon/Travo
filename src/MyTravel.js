import React from "react";
import SimpleMap from "./GoogleMap";
import "./MyTravel.css";

function MyTravel({ color }) {
  return (
    <div
      className="myTravel"
      style={{ borderColor: `${color}`, color: `${color}` }}
    >
      <SimpleMap />
    </div>
  );
}

export default MyTravel;
