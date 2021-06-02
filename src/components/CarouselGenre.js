import React from "react";
import "./CarouselGenre.css";
function CarouselGenre({genre,image}) {
  return (
    <div>
      <img className="imageGenre" src={image} />
      <div className="centered"><h2>{genre}</h2></div>
    </div>
  );
}

export default CarouselGenre;