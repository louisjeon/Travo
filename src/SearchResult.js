import React from "react";
import "./SearchResult.css";
import Card from "./Card";

function SearchResult({ color, places, prevSearchTerm }) {
  const getURL = (input) => {
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${input}&key=AIzaSyC_-dICZqWecrafgAWkKMlc0OpfapUkLWQ`;
  };

  return (
    <div className="searchResult" style={{ borderColor: `${color}` }}>
      {places &&
        places.map((place) => (
          <Card
            key={place.place_id}
            bgURL={
              place.photos
                ? getURL(place.photos[0].photo_reference)
                : "https://rundellconstruction.com/wp-content/themes/realestate-7/images/no-image.png"
            }
            color={color}
            title={place.name}
            content1={place.formatted_address}
            {...place}
          />
        ))}
      {!places && (
        <h2
          style={{
            color: `${color}`,
            alignSelf: "center",
            marginLeft: "30vw",
            fontSize: "50px",
          }}
        >
          Searching...
        </h2>
      )}
    </div>
  );
}

export default SearchResult;
