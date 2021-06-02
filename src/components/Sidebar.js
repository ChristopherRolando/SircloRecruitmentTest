import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import FavoriteIcon from '@material-ui/icons/Favorite';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AlbumIcon from '@material-ui/icons/Album';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import HeadsetIcon from '@material-ui/icons/Headset';

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarDesktop">
        <SidebarOption option="HOME" />
        <SidebarOption option="BROWSE" />
        <SidebarOption option="HEAR THIS" />
        <hr />
        <SidebarOption Icon={FavoriteIcon} option="Favourite Tracks" />
        <SidebarOption Icon={QueueMusicIcon} option="Playlists" />
        <SidebarOption Icon={AlbumIcon} option="Albums" />
      </div>
      <div className="sidebarMobile">
        <SidebarOption Icon={HomeIcon} />
        <SidebarOption Icon={SearchIcon} />
        <SidebarOption Icon={HeadsetIcon} />
        <hr />
        <SidebarOption Icon={FavoriteIcon} />
        <SidebarOption Icon={QueueMusicIcon} />
        <SidebarOption Icon={AlbumIcon} />
      </div>
    </div>
  );
}

export default Sidebar;