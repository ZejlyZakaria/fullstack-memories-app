import React from "react";

import Navbar from "../components/navbar/Navbar";
import AnimeSidebar from "../components/sidebars/AnimeSidebar";
import AllAnimes from "../components/allAnimes/AllAnimes";

const AnimesAll = () => {
  return (
    <div className=" anime-container px-0 2xl:px-16">
      <div className="container mx-auto">
        <Navbar />
        <AnimeSidebar />
        <div className="px-4">
          <AllAnimes />
        </div>
      </div>
    </div>
  );
};

export default AnimesAll;
