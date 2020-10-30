import React from "react";
import "./Events.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const SEARCH_API =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&key=AIzaSyC_-dICZqWecrafgAWkKMlc0OpfapUkLWQ&query=";

function Events({ num, setNum, color, getPlaces }) {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  const eventsSet = {
    0: {
      title: "Find out more about Japanese culture with festivals near you.",
      description:
        "What a best way to learn about Japanese culture than experiencing their festivals? Join Japanese festivals near you that you may not have seen before.",
      imageURL:
        "https://images.pexels.com/photos/707265/pexels-photo-707265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      textColor: "red",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    1: {
      title: "Enjoy the French cuisine in your neighborhood.",
      description:
        "Want to feel French? How about luxurious resaurants and elegant cafes? Click and see what french spots you have been missing so far.",
      imageURL:
        "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      textColor: "yellowgreen",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    2: {
      title: "Feeling artistic? Why not try local museums and art galaries?",
      description:
        "Every once and while, we all feel like we can be an artist. Desire for art is a human nature and secret to the modern day well being.",
      imageURL:
        "https://images.pexels.com/photos/34633/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      textColor: "lightblue",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    3: {
      title: "Fresh air and wide view of mother nature.",
      description:
        "Hiking is one of the best ways to release stress and find out more about the value of nature. Join us to know more about local hiking spots.",
      imageURL:
        "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      textColor: "orange",
      backgroundColor: "rgba(0,0,0,0.6)",
    },
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (tab === 0) {
      getPlaces(SEARCH_API + "Japanese festival");
    } else if (tab === 1) {
      getPlaces(SEARCH_API + "French");
    } else if (tab === 2) {
      getPlaces(SEARCH_API + "art");
    } else if (tab === 3) {
      getPlaces(SEARCH_API + "hiking");
    }
    history.push("./search");
  };

  return (
    <div
      className="events"
      style={{
        backgroundImage: `url(${eventsSet[tab].imageURL})`,
        backgroundSize: "cover",
        borderColor: `${color}`,
        backgroundPosition: "center",
      }}
    >
      <div
        className="texts"
        style={{
          width: "50vw",
          backgroundColor: `${eventsSet[tab].backgroundColor}`,
          borderRadius: "50px",
          color: `${color}`,
          cursor: "pointer",
        }}
        onClick={handleOnClick}
      >
        <h2
          style={{
            fontSize: "40px",
            WebkitTextStroke: `2px ${color}`,
            marginLeft: "30px",
            color: "transparent",
          }}
        >
          {eventsSet[tab].title}
        </h2>
        <p
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          {eventsSet[tab].description}
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "transparent",
            fontFamily: "inherit",
            color: `${color}`,
            border: `2px solid ${color}`,
            marginLeft: "30px",
          }}
        >
          Learn More
        </button>
      </div>
      <div className="otherEvents">
        <button
          className="event"
          style={{
            border: tab === 0 && "2px solid white",
            backgroundColor: "red",
          }}
          onClick={() => {
            setTab(0);
            setNum(0);
          }}
        ></button>
        <button
          className="event"
          style={{
            border: tab === 1 && "2px solid white",
            backgroundColor: "yellowgreen",
          }}
          onClick={() => {
            setTab(1);
            setNum(1);
          }}
        ></button>
        <button
          className="event"
          style={{
            border: tab === 2 && "2px solid white",
            backgroundColor: "lightblue",
          }}
          onClick={() => {
            setTab(2);
            setNum(2);
          }}
        ></button>
        <button
          className="event"
          style={{
            border: tab === 3 && "2px solid white",
            backgroundColor: "orange",
          }}
          onClick={() => {
            setTab(3);
            setNum(3);
          }}
        ></button>
      </div>
    </div>
  );
}

export default Events;
