import React from 'react';
import "./Player.css";
import Body from "./Body";
import Sidebar from "./Sidebar"

const App = () => {
    return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
    </div>
    );
  };
  
  export default App;