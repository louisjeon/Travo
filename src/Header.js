import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import ExploreIcon from "@material-ui/icons/Explore";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const SEARCH_API =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&key=AIzaSyC_-dICZqWecrafgAWkKMlc0OpfapUkLWQ&query=";

function Header({ color, getPlaces, setPrevSearchTerm }) {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getPlaces(SEARCH_API + searchTerm);
    } else {
      getPlaces(SEARCH_API + "1");
    }
    setPrevSearchTerm(searchTerm);
    setSearchTerm("");
    history.push("./search");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const loginOrInfo = () => {
    if (user) {
      return "./info";
    } else {
      return "./login";
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + `/Travo_${color}.png`}
          alt="e"
          style={{ width: "20vw", height: "100px", objectFit: "cover" }}
          className="logo"
        />
      </Link>
      <div className="middleHeader">
        <form onSubmit={handleOnSubmit} style={{ alignSelf: "center" }}>
          <input
            value={searchTerm}
            type="text"
            className="searchBar"
            placeholder="Type your interest..."
            style={{
              backgroundColor: "transparent",
              border: `2px solid ${color}`,
              fontSize: "30px",
              color: `${color}`,
              height: "40px",
              borderRadius: "50px",
              textIndent: "20px",
            }}
            onChange={handleOnChange}
          />
        </form>
        <SearchIcon
          style={{
            color: `${color}`,
            fontSize: "50px",
            cursor: "pointer",
            alignSelf: "center",
          }}
          onClick={handleOnSubmit}
        />
      </div>
      <div className="user" style={{ color: `${color}` }}>
        <Link to={loginOrInfo}>
          <img
            src={
              user
                ? user?.photoURL
                : "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
            }
            alt="usericon"
            className="userIcon"
            style={{
              border: `3px solid ${color}`,
              borderRadius: "999px",
              cursor: "pointer",
            }}
          />
        </Link>
        <div
          className="profile"
          style={{
            marginLeft: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to={loginOrInfo} style={{ textDecoration: "none" }}>
            <h2
              style={{
                cursor: "pointer",
                color: `${color}`,
                height: "3vh",
              }}
            >
              {user ? user?.displayName : "Sign In"}
            </h2>
          </Link>
          <div className="icons">
            <Link to="/info">
              <InfoIcon
                style={{
                  fontSize: "40px",
                  cursor: "pointer",
                  marginRight: "10px",
                  color: `${color}`,
                }}
              />
            </Link>
            <Link to="/myTravel">
              <ExploreIcon
                style={{
                  fontSize: "40px",
                  cursor: "pointer",
                  marginRight: "10px",
                  color: `${color}`,
                }}
              />
            </Link>
            <Link to="/settings">
              <SettingsIcon
                style={{
                  fontSize: "40px",
                  cursor: "pointer",
                  color: `${color}`,
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
