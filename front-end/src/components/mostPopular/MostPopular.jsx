import React from "react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./mostpopular.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const MostPopular = () => {
  const options = {
    speed: 500,
    max: 20,
  };
  return (
    <div className="mostpopular-container bg-slate-700 p-4 mb-6 rounded-lg">
      <div className="comment-header flex justify-between mb-4">
        <div className="recently-added-title text-white text-xl md:text-2xl font-semibold mb-1 ">
          Most Popular Animes
        </div>
        <div className="newest-comments text-gray-200 text-sm p-2 bg-gray-800 rounded-md cursor-pointer">
          View All
        </div>
      </div>
      <div className="mostpopular-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <Tilt options={options}>
          <div className="mostpopular-card flex cursor-pointer bg-slate-500 p-4 rounded-lg">
            <div className="mostpopular-img flex items-center mr-3 ">
              <div className="rounded-md w-12 h-[76px] sm:h-[76px] sm:w-12 lg:h-[90px] lg:w-14 xl:h-[90px] xl:w-14">
                <img
                  src="/assets/images/elite.jpg"
                  className="object-cover rounded-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="mostpopular-title font-semibold text-base sm:text-sm md:text-sm xl:text-base">
              <div class="mostpopular-title-content text-white mb-2">
                Elite High School
              </div>
              <div className="flex items-center text-gray-200 text-sm ">
                <div className="mr-2 md:mr-4">TV</div>
                <div className="dot"></div>
                <div>Ep 64/64</div>
                <div className="dot"></div>
                <div className="ml-2 md:ml-4">23 min</div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className="mostpopular-card flex cursor-pointer bg-slate-500 p-4 rounded-lg">
            <div className="mostpopular-img flex items-center mr-3 ">
              <div className="rounded-md w-12 h-[76px] sm:h-[76px] sm:w-12 lg:h-[90px] lg:w-14 xl:h-[90px] xl:w-14">
                <img
                  src="/assets/images/ippo.jfif"
                  className="object-cover rounded-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="mostpopular-title font-semibold text-base sm:text-sm md:text-sm xl:text-base">
              <div class="mostpopular-title-content text-white mb-2">
                Hajime No ippo
              </div>
              <div className="flex items-center text-gray-200 text-sm">
                <div className="mr-2 md:mr-4">TV</div>
                <div className="dot"></div>
                <div>Ep 64/64</div>
                <div className="dot"></div>
                <div className="ml-2 md:ml-4">23 min</div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className="mostpopular-card flex cursor-pointer bg-slate-500 p-4 rounded-lg">
            <div className="mostpopular-img flex items-center mr-3 ">
              <div className="rounded-md w-12 h-[76px] sm:h-[76px] sm:w-12 lg:h-[90px] lg:w-14 xl:h-[90px] xl:w-14">
                <img
                  src="/assets/images/Nanatsu No Taizai.jpg"
                  className="object-cover rounded-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="mostpopular-title font-semibold text-base sm:text-sm md:text-sm xl:text-base">
              <div class="mostpopular-title-content text-white mb-2">
                Nanatsu No Taiza
              </div>
              <div className="flex items-center text-gray-200 text-sm">
                <div className="mr-2 md:mr-4">TV</div>
                <div className="dot"></div>
                <div>Ep 64/64</div>
                <div className="dot"></div>
                <div className="ml-2 md:ml-4">23 min</div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className="mostpopular-card flex cursor-pointer bg-slate-500 p-4 rounded-lg">
            <div className="mostpopular-img flex items-center mr-3 ">
              <div className="rounded-md w-12 h-[76px] sm:h-[76px] sm:w-12 lg:h-[90px] lg:w-14 xl:h-[90px] xl:w-14">
                <img
                  src="/assets/images/neverland.jpg"
                  className="object-cover rounded-md h-full w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="mostpopular-title font-semibold text-base sm:text-sm md:text-sm xl:text-base">
              <div class="mostpopular-title-content text-white mb-2">
                Yokosu No Neverland
              </div>
              <div className="flex items-center text-gray-200 text-sm">
                <div className="mr-2 md:mr-4">TV</div>
                <div className="dot"></div>
                <div>Ep 64/64</div>
                <div className="dot"></div>
                <div className="ml-2 md:ml-4">23 min</div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default MostPopular;
