import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

import "./trending.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const Trending = () => {
  const options = {
    speed: 500,
    max: 30,
  };
  return (
    <div class="trending-container mb-6">
      <div className="text-white text-xl md:text-2xl font-semibold mb-4 flex items-center">
        <div>
          <img src="/assets/icons/fire.svg" alt="" className="w-6 h-6 mr-2" />
        </div>
        <div>Trending</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        <Link to="/animes/details-page">
          <Tilt options={options}>
            <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
              <div className="trending-card rounded-lg">
                <div>
                  <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                    <img
                      src="/assets/images/dbsuper.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="trending-info w-32 mt-2">
                    <div className="title text-sm md:text-md">
                      Dragon Ball Super
                    </div>
                  </div>
                  <div className="trending-rating bottom-section flex items-center text-white mt-1">
                    <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                    <div className="text-gray-300 text-sm">82%</div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>

        <Link to="/animes/details-page">
          <Tilt options={options}>
            <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
              <div className="trending-card rounded-lg">
                <div>
                  <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                    <img
                      src="/assets/images/bleach_s2.webp"
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="trending-info w-32 mt-2">
                    <div className="title text-sm md:text-md">
                      Bleach Saison 2
                    </div>
                  </div>
                  <div className="trending-rating bottom-section flex items-center text-white mt-1">
                    <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                    <div className="text-gray-300 text-sm">92%</div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>

        <Link to="/animes/details-page">
          <Tilt options={options}>
            <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
              <div className="trending-card rounded-lg">
                <div>
                  <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                    <img
                      src="/assets/images/deathnote.webp"
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="trending-info w-32 mt-2">
                    <div className="title text-sm md:text-md">Death Note</div>
                  </div>
                  <div className="trending-rating bottom-section flex items-center text-white mt-1">
                    <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                    <div className="text-gray-300 text-sm">90%</div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>

        <Link to="/animes/details-page">
          <Tilt options={options}>
            <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
              <div className="trending-card rounded-lg">
                <div>
                  <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                    <img
                      src="/assets/images/jujistukaisen.jpg"
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="trending-info w-32 mt-2">
                    <div className="title text-sm md:text-md">
                      Jujistu Kaisen
                    </div>
                  </div>
                  <div className="trending-rating bottom-section flex items-center text-white mt-1">
                    <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                    <div className="text-gray-300 text-sm">85%</div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>

        <Link to="/animes/details-page">
          <Tilt options={options}>
            <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
              <div className="trending-card rounded-lg">
                <div>
                  <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                    <img
                      src="/assets/images/blackclover.jfif"
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="trending-info w-32 mt-2">
                    <div className="title text-sm md:text-md">Black Clover</div>
                  </div>
                  <div className="trending-rating bottom-section flex items-center text-white mt-1">
                    <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                    <div className="text-gray-300 text-sm">80%</div>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
