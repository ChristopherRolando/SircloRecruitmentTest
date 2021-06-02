import React from "react";
import "./Body.css";
import Text from "./Text";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SongName from "./SongName";
import CarouselGenre from "./CarouselGenre";
import CarouselAlbum from "./CarouselAlbum";

const options ={
  dots:false, 
  nav:true,
  margin:40,
  responsive: {
    500: {
      items: 1,
    },
    640: {
        items: 1,
    },
    768: {
        items: 3,
    },
    1024: {
        items: 4,
    }
  },
}
function Body() {
  return (
    <div className="body">
      <div>
        <div className="background">
          <div className="streams">
            <img className="stream" src="img/album-songs.jpg"></img>
            <img className="border"src="img/animated-eq.gif"></img>
            <div className="textSong">
              <SongName text="All I want" description="by Kodaline" />
            </div>
          </div>
        </div>
      </div>
      <div className="genre">
        <Text text="Browse" description="Explore music, entertainment, and many more" Icon={ArrowForwardIosIcon}/>
        <OwlCarousel className="owl-theme" {...options}>
          <CarouselGenre image ="img/genre-1.jpg" genre="Popular"/>
          <CarouselGenre image ="img/genre-2.jpg" genre="Indie"/>
          <CarouselGenre image ="img/genre-3.jpg" genre="Pop"/>
          <CarouselGenre image ="img/genre-4.jpg" genre="Rock"/>
          <CarouselGenre image ="img/genre-5.jpg" genre="Party"/>
          <CarouselGenre image ="img/genre-6.jpg" genre="R'n'b"/>
          <CarouselGenre image ="img/genre-7.jpg" genre="Dance & EDM"/>
          <CarouselGenre image ="img/genre-8.jpg" genre="Electronic"/>
        </OwlCarousel>
      </div>
      <div className="album">
        <Text text="Playlist picks" description="Chosen for you by our Editors"/>
        <OwlCarousel className="owl-theme" {...options}>
          <CarouselAlbum image="img/album-1.jpg" title="Hits of the Moment" description="60 tracks - 725,066 fans"/>
          <CarouselAlbum image="img/album-2.jpg" title="New Dance" description="50 tracks - 114,577 fans"/>
          <CarouselAlbum image="img/album-3.jpg" title="Wake up Hits" description="87 tracks - 72,705 fans"/>
          <CarouselAlbum image="img/album-4.jpg" title="Pop Punk Heroes" description="93 tracks - 35,619 fans"/>
          <CarouselAlbum image="img/album-5.jpg" title="Thank God It's Friday" description="100 tracks - 72,842 fans"/>
          <CarouselAlbum image="img/album-6.jpg" title="New School of Rap" description="50 tracks - 56,447 fans"/>
          <CarouselAlbum image="img/album-7.jpg" title="Sunday Morning" description="29 tracks - 9,902 fans"/>
          <CarouselAlbum image="img/album-8.jpg" title="Motivations Hits" description="77 tracks - 178,539 fans"/>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Body;