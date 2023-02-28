import React from "react";
import "./animeHome.css";

import AnimeSidebar from "../components/sidebars/AnimeSidebar";
import Navbar from "../components/navbar/Navbar";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import Trending from "../components/Trending/Trending";
import Comments from "../components/comments/Comments";
import TopAnime from "../components/topAnime/TopAnime";
import RecentlyAdded from "../components/recentlyAdded/RecentlyAdded";
import TopUpComing from "../components/topUpComing/TopUpComing";
import MostPopular from "../components/mostPopular/MostPopular";
import MostFavorite from "../components/mostFavorite/MostFavorite";

const AnimeHome = () => {
  return (
    <div className=" anime-container px-0 2xl:px-16">
      <div className="container mx-auto">
        <Navbar />
        <AnimeSidebar />
        <div className="flex flex-col xl:flex-row">
          <div class="w-full xl:w-2/3 px-4">
            <ImageSlider />
            <Trending />
            <TopUpComing />
            <Comments />
          </div>
          <div class="w-full xl:w-1/3 px-4">
            <TopAnime />
            <RecentlyAdded />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          <div class="w-full xl:w-1/2 px-4">
            <MostPopular />
          </div>
          <div class="w-full xl:w-1/2 px-4">
            <MostFavorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeHome;
