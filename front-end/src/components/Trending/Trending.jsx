import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import VanillaTilt from "vanilla-tilt";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Trending = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/animes").then((response) => {
      setAnimes(response.data.data);
    });
  }, []);

  const options = {
    speed: 500,
    max: 30,
  };

  return (
    <div class="upcoming-container mb-6">
      <div className="text-white text-xl md:text-2xl font-semibold mb-4 flex items-center">
        <div>
          <img src="/assets/icons/fire.svg" alt="" className="w-6 h-6 mr-2" />
        </div>
        <div>Trending</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {animes.slice(0, 5).map((anime) => (
          <Link to="/animes/details-page">
            <Tilt options={options}>
              <div className="upcoming-content flex justify-center rounded-lg mb-3">
                <div className="upcoming-card rounded-lg">
                  <div>
                    <div className="upcoming-img w-full">
                      <img
                        src={anime.cover_image}
                        alt=""
                        className="w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px] object-cover rounded-lg"
                      />
                    </div>
                    <div className="upcoming-info w-full mt-2">
                      <div className="title text-sm md:text-md">
                        {anime.title}
                      </div>
                    </div>
                    <div className="upcoming-rating bottom-section flex items-center text-white mt-1">
                      <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                      <div className="text-gray-300 text-sm">
                        {anime.rating}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trending;
