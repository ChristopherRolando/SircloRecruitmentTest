import React from "react";
import "./CarouselAlbum.css";
function CarouselAlbum({title,image,description}) {
  return (
    <div className="container">
        <img className="images" src={image} />
        <div className="overlay">
            <div className="wrapIconImage">
                <img src="img/action-play.png"></img>
                <img src="img/action-favorite.png"></img>
                <img src="img/action-more.png"></img>
            </div>
        </div>
        <div>{title}</div>
        <div>{description}</div>
    </div>
  );
}

export default CarouselAlbum;