import React from "react";
import "./Body.css";
import Events from "./Events";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const SEARCH_API =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?radius=10000&key=AIzaSyC_-dICZqWecrafgAWkKMlc0OpfapUkLWQ&query=";

function Body({ num, setNum, color, getPlaces }) {
  const history = useHistory();
  const getHotels = () => {
    getPlaces(SEARCH_API + "hotel");
    history.push("./search");
  };
  const getWorkshops = () => {
    getPlaces(SEARCH_API + "workshop");
    history.push("./search");
  };
  const getFarms = () => {
    getPlaces(SEARCH_API + "farm");
    history.push("./search");
  };
  return (
    <div className="outerBody">
      <div className="body">
        <Events num={num} setNum={setNum} color={color} getPlaces={getPlaces} />
        <Card
          color={color}
          bgURL="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Search about local hotels"
          content1="Where you stay is one of the most important factors on the satisfaction of your travel."
          getResult={getHotels}
        />
        <Card
          color={color}
          bgURL="https://images.pexels.com/photos/630762/mill-workshop-milling-industry-630762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Make your own souvenir in workshops"
          content1="What can be a better souvenir than something you made by yourself? Try some DIY projects near you."
          getResult={getWorkshops}
        />
        <Card
          color={color}
          bgURL="https://images.pexels.com/photos/1094544/pexels-photo-1094544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          title="Welcome to the farms"
          content1="If you have never stayed at a farm before, this is your perfect chance to experience the farm echo system."
          getResult={getFarms}
        />
      </div>
    </div>
  );
}

export default Body;
