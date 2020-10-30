import "./App.css";
import Header from "./Header";
import Body from "./Body";
import SearchResult from "./SearchResult";
import Login from "./Login";
import Info from "./Info";
import MyTravel from "./MyTravel";
import Settings from "./Settings";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const proxyurl = "https://cors-anywhere.herokuapp.com/";

function App() {
  const [places, setPlaces] = useState();
  const [prevSearchTerm, setPrevSearchTerm] = useState();
  const [eventNum, setEventNum] = useState(0);
  const colors = [
    "red",
    "yellowgreen",
    "lightblue",
    "orange",
    "coral",
    "purple",
    "crimson",
    "teal",
  ];
  const color = colors[eventNum];
  const currentYear = new Date().getFullYear();
  const [{ user }, dispatch] = useStateValue();
  const [BGURL, setBGURL] = useState(
    "https://images.pexels.com/photos/3384692/pexels-photo-3384692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  );
  const [font, setFont] = useState("");

  const getPlaces = (API) => {
    fetch(proxyurl + API)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data.results);
      });
  };

  return (
    <Router>
      <div
        className="App"
        style={{ backgroundImage: `${BGURL}`, fontFamily: `${font}` }}
      >
        <div className="travo" style={{ borderColor: color }}>
          <Header
            color={color}
            setPrevSearchTerm={setPrevSearchTerm}
            setPlaces={setPlaces}
            getPlaces={getPlaces}
          />
          <Switch>
            <Route path="/search">
              <SearchResult
                color={color}
                places={places}
                prevSearchTerm={prevSearchTerm}
              />
            </Route>
            <Route path="/login">
              <Login color={color} />
            </Route>
            <Route path="/info">
              <Info color={color} />
            </Route>
            <Route path="/myTravel">
              <MyTravel color={color} />
            </Route>
            <Route path="/settings">
              <Settings
                color={color}
                setBGURL={setBGURL}
                setFont={setFont}
                setEventNum={setEventNum}
                colors={colors}
              />
            </Route>
            <Route path="/">
              <Body
                num={eventNum}
                setNum={setEventNum}
                color={color}
                getPlaces={getPlaces}
              />
            </Route>
          </Switch>
          <footer
            className="footer"
            style={{
              color: `${color}`,
              // backgroundColor: "rgba(0,0,0,0.9)",
              height: "5vh",
            }}
          >
            <p
              style={{
                color: `${color}`,
                textAlign: "center",
              }}
            >
              ©Eunbae Jeon {currentYear}, All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
