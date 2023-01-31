import React from "react";
import AnimeSidebar from "../components/sidebars/AnimeSidebar";
import Navbar from "../components/navbar/Navbar";

const AnimeHome = () => {
  return (
    <div className="home">
      <AnimeSidebar />
      <div className="anime_Home_Container">
        <Navbar />
      </div>
    </div>
  );
};

export default AnimeHome;
