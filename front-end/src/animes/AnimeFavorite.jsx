import React from "react";
import Favorite from "../components/favorite/Favorite";

import Navbar from "../components/navbar/Navbar";
import AnimeSidebar from "../components/sidebars/AnimeSidebar";


const AnimeFavorite = () => {
  return (
    <div className=" anime-container px-0 2xl:px-16">
      <div className="container mx-auto">
        <Navbar />
        <AnimeSidebar />
        <div className="px-4">
          <Favorite />
        </div>
      </div>
    </div>
  );
};

export default AnimeFavorite;