import React from "react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./upComing.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const TopUpComing = () => {
  const options = {
    speed: 500,
    max: 30,
  };
  return (
    <div class="upcoming-container mb-6">
      <div className="text-white text-xl md:text-2xl font-semibold mb-4 flex items-center">
        <div>
          <img src="/assets/icons/time-stopwatch-watch-svgrepo-com.svg" alt="" className="w-8 h-8 mr-2" />
        </div>
        <div>Top Upcoming</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        <Tilt options={options}>
          <div className="upcoming-content flex justify-center rounded-lg mb-3">
            <div className="upcoming-card rounded-lg">
              <div>
                <div className="upcoming-img w-full">
                  <img
                    src="/assets/images/fatezero.jpg"
                    alt=""
                    className="w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px] object-cover rounded-lg"
                  />
                </div>
                <div className="upcoming-info w-32 mt-2">
                  <div className="title text-sm md:text-md">Fate Zero</div>
                </div>
                <div className="upcoming-rating bottom-section flex items-center text-white mt-1">
                  <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                  <div className="text-gray-300 text-sm">82%</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt options={options}>
          <div className="upcoming-content flex justify-center rounded-lg mb-3">
            <div className="upcoming-card rounded-lg">
              <div>
                <div className="upcoming-img w-full">
                  <img
                    src="/assets/images/codegeass.jfif"
                    alt=""
                    className="w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px] object-cover rounded-lg"
                  />
                </div>
                <div className="upcoming-info w-32 mt-2">
                  <div className="title text-sm md:text-md">Code Geass</div>
                </div>
                <div className="upcoming-rating bottom-section flex items-center text-white mt-1">
                  <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                  <div className="text-gray-300 text-sm">92%</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        <Tilt options={options}>
          <div className="upcoming-content flex justify-center rounded-lg mb-3">
            <div className="upcoming-card rounded-lg">
              <div>
                <div className="upcoming-img w-full">
                  <img
                    src="/assets/images/hxh3.jpg"
                    alt=""
                    className="w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px] object-cover rounded-lg"
                  />
                </div>
                <div className="upcoming-info w-32 mt-2">
                  <div className="title text-sm md:text-md">
                    Hunter X Hunter
                  </div>
                </div>
                <div className="upcoming-rating bottom-section flex items-center text-white mt-1">
                  <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                  <div className="text-gray-300 text-sm">90%</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        <Tilt options={options}>
          <div className="upcoming-content flex justify-center rounded-lg mb-3">
            <div className="upcoming-card rounded-lg">
              <div>
                <div className="upcoming-img w-full">
                  <img
                    src="/assets/images/mobpsycho.jpg"
                    alt=""
                    className="w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px] object-cover rounded-lg"
                  />
                </div>
                <div className="upcoming-info w-32 mt-2">
                  <div className="title text-sm md:text-md">Mob Psycho</div>
                </div>
                <div className="upcoming-rating bottom-section flex items-center text-white mt-1">
                  <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                  <div className="text-gray-300 text-sm">85%</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        <Tilt options={options}>
          <div className="upcoming-content flex justify-center rounded-lg mb-3">
            <div className="upcoming-card rounded-lg">
              <div>
                <div className="upcoming-img w-full">
                  <img
                    src="/assets/images/haikyuu.jpg"
                    alt=""
                    className="w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px] object-cover rounded-lg"
                  />
                </div>
                <div className="upcoming-info w-32 mt-2">
                  <div className="title text-sm md:text-md">Haikyuu</div>
                </div>
                <div className="upcoming-rating bottom-section flex items-center text-white mt-1">
                  <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                  <div className="text-gray-300 text-sm">80%</div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default TopUpComing;
