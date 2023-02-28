import React from "react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./recentlyAdded.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const RecentlyAdded = () => {
  const options = {
    speed: 500,
    max: 5,
  };
  return (
    <Tilt options={options}>
      <div className="recently-added-container text-white rounded-lg mb-6">
        <div className="mb-6">
          <div className="flex justify-between items-center px-4 py-2 ">
            <div className="recently-added-title text-xl md:text-2xl font-semibold mb-1">
              Recently Added
            </div>
            <div className="recently-added-title text-sm p-2 bg-gray-800 rounded-md cursor-pointer">
              View all
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-1 gap-3 ">
            <div className="recently-added-others px-4 py-2 cursor-pointer">
              <div className="recently-added-img flex items-center mr-3 ">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/tokyoghoul.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="recently-added-title font-semibold mb-1 text-base sm:text-xs md:text-sm lg:text-sm xl:text-md">
                <div class="recently-added-title-content text-white mb-1">
                  Tokyo Ghoul
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="mr-6">2023</div>
                  <div>Ep 64/64</div>
                </div>
              </div>
            </div>
            <div className="recently-added-others px-4 py-2 cursor-pointer">
              <div className="recently-added-img flex items-center mr-3 ">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/bluelock.jpeg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="recently-added-title font-semibold mb-1 text-base sm:text-xs md:text-sm lg:text-sm xl:text-md">
                <div class="recently-added-title-content text-white mb-1">
                  Blue Lock
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="mr-6">2023</div>
                  <div>Ep 24/24</div>
                </div>
              </div>
            </div>
            <div className="recently-added-others px-4 py-2 cursor-pointer">
              <div className="recently-added-img flex items-center mr-3 ">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/bokunohero.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="recently-added-title font-semibold mb-1 text-base sm:text-xs md:text-sm lg:text-sm xl:text-md">
                <div class="recently-added-title-content text-white mb-1">
                  My Hero Academy
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="mr-6">2023</div>
                  <div>Ep 24/24</div>
                </div>
              </div>
            </div>
            <div className="recently-added-others px-4 py-2 cursor-pointer">
              <div className="recently-added-img flex items-center mr-3 ">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/demonslayer2.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="recently-added-title font-semibold mb-1 text-base sm:text-xs md:text-sm lg:text-sm xl:text-md">
                <div class="recently-added-title-content text-white mb-1">
                  Demon Slayer
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="mr-6">2023</div>
                  <div>Ep 24/24</div>
                </div>
              </div>
            </div>
            <div className="recently-added-others px-4 py-2 cursor-pointer mb-4 ">
              <div className="recently-added-img flex items-center mr-3 ">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/koroko.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="recently-added-title font-semibold mb-1 text-base sm:text-xs md:text-sm lg:text-sm xl:text-md">
                <div class="recently-added-title-content text-white mb-1">
                  Koroku No Basket
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="mr-6">2023</div>
                  <div>Ep 24/24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default RecentlyAdded;
