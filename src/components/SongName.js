import React from "react";
import "./SongName.css";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function SongName({ text, description }) {
  return (
    <div>
        <h3 className="white">{text}</h3>
        <h5 className="white">{description}</h5>
        <FavoriteBorderIcon className="borderFav white"/>
        <SkipNextIcon className="borderSkip white"/>
    </div>
  );
}

export default SongName;