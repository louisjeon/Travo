import React from "react";
import "./Settings.css";

function Settings({ color, setBGURL, setFont, setEventNum, colors }) {
  const BGs = [
    [
      0,
      "https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      1,
      "https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      2,
      "https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      3,
      "https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    [
      4,
      "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      5,
      "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      6,
      "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      7,
      "https://images.pexels.com/photos/2917442/pexels-photo-2917442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      8,
      "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      9,
      "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      10,
      "https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    [
      11,
      "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    ],
  ];

  const FONTS = [
    [0, "Arial", "Arial"],
    [1, "Comic Sans MS", "Comic_Sans_MS"],
    [2, "Fira Sans", "Fira_Sans"],
    [3, "Raleway", "Raleway"],
    [4, "Roboto", "Roboto"],
    [5, "Ubuntu", "Ubuntu"],
  ];

  const handleBGChange = (e) => {
    e.preventDefault();
    setBGURL(e.target.style.backgroundImage);
  };

  const handleFontChange = (e) => {
    e.preventDefault();
    console.log(e.target.style.fontFamily);
    setFont(e.target.style.fontFamily);
  };
  return (
    <div
      className="settings"
      style={{ borderColor: `${color}`, color: `${color}` }}
    >
      <div className="setting">
        <h1>Change Background</h1>
        <div className="settingInner">
          {BGs.map((BG) => (
            <div
              className="smallCard"
              style={{
                backgroundImage: `url(${BG[1]}
              )`,
              }}
              onClick={handleBGChange}
            ></div>
          ))}
        </div>
      </div>
      <div className="setting">
        <h1>Change Font Family</h1>
        <div className="settingInner font">
          {FONTS.map((FONT) => (
            <div
              className="smallCard"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + FONT[2]}.jpg`,
                fontFamily: FONT[1],
                height: "21vh",
                backgroundPosition: "center",
                backgroundSize: "220px 130px",
              }}
              onClick={handleFontChange}
            ></div>
          ))}
        </div>
      </div>
      <div className="setting">
        <h1>Change Theme Color</h1>
        <div className="settingInner clrs">
          {colors.map((COLOR) => (
            <div
              className="smallCard"
              style={{
                backgroundColor: COLOR,
                height: "16vh",
              }}
              onClick={() => {
                setEventNum(colors.indexOf(COLOR));
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;
