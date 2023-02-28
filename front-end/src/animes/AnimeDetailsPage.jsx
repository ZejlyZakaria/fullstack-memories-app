import React from "react";

import Navbar from "../components/navbar/Navbar";
import AnimeSidebar from "../components/sidebars/AnimeSidebar";
import DetailsPage from "../components/detailsPage/DetailsPage";

const AnimeDetailsPage = () => {
  return (
    <div className=" anime-container px-0 2xl:px-16">
      <div className="container mx-auto">
        <Navbar />
        <AnimeSidebar />
        <div className="px-4">
          <DetailsPage />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
