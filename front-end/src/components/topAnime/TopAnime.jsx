import React from "react";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import "./topAnime.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const TopAnime = () => {
  const options = {
    speed: 500,
    max: 5,
  };
  return (
    <Tilt options={options}>
      <div className="text-white topanime-container rounded-lg mb-6">
        <div>
          <div className="topanime-title text-xl md:text-2xl font-semibold px-4 py-2 mb-1 ">
            Top Anime
          </div>
          <div class="relative h-44 w-full image-with-gradient">
            <img
              src="/assets/images/hxh.webp"
              className="object-cover w-full h-full rounded-lg"
              alt=""
            />
            <div className="topanime-one p-4">
              <div className="flex">
                <div className="topanime-number flex items-center mr-3">
                  <div className="border-solid border-2 border-white rounded-md py-1 px-3 text-2xl text-black bg-white">
                    1
                  </div>
                </div>
                <div className="topanime-title text-white font-semibold text-base sm:text-xs md:text-sm xl:text-md cursor-pointer">
                  <div class="topanime-title-content">Hunter x Hunter</div>
                  <div className="flex items-center">
                    <div className="mr-2 text-gray-300 mt-0.5">
                      <i class="bx bxs-show "></i>
                    </div>
                    <div className="">50,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-1 gap-3">
            <div className="topanime-others px-4 py-2 cursor-pointer">
              <div className="topanime-number flex items-center mr-3">
                <div className="border-solid border-2 border-white rounded-md py-1 px-3 text-2xl text-gray-300">
                  2
                </div>
              </div>
              <div className="topanime-img flex items-center mr-3">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/aot.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="topanime-title text-white font-semibold text-base sm:text-xs md:text-sm xl:text-md">
                <div class="topanime-title-content mb-1.5">
                  Attack on titan saison 4
                </div>
                <div className="flex items-center mr-6">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-show "></i>
                  </div>
                  <div className="">50,000</div>
                </div>
              </div>
            </div>

            <div className="topanime-others px-4 py-2 cursor-pointer">
              <div className="topanime-number flex items-center mr-3">
                <div className="border-solid border-2 border-white rounded-md py-1 px-3 text-2xl text-gray-300">
                  3
                </div>
              </div>
              <div className="topanime-img flex items-center mr-3">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/fullmetal.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="topanime-title text-white font-semibold text-base sm:text-xs md:text-sm xl:text-md">
                <div class="topanime-title-content mb-1.5">Full Metal Archimist</div>
                <div className="flex items-center mr-6">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-show "></i>
                  </div>
                  <div className="">50,000</div>
                </div>
              </div>
            </div>
            <div className="topanime-others px-4 py-2 cursor-pointer">
              <div className="topanime-number flex items-center mr-3">
                <div className="border-solid border-2 border-white rounded-md py-1 px-3 text-2xl text-gray-300">
                  4
                </div>
              </div>
              <div className="topanime-img flex items-center mr-3 ">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/naruto.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="topanime-title text-white font-semibold text-base sm:text-xs md:text-sm xl:text-md">
                <div class="topanime-title-content mb-1.5">Naruto shippuden</div>
                <div className="flex items-center mr-6">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-show "></i>
                  </div>
                  <div className="">50,000</div>
                </div>
              </div>
            </div>
            <div className="topanime-others px-4 py-2 cursor-pointer mb-4">
              <div className="topanime-number flex items-center mr-3">
                <div className="border-solid border-2 border-white rounded-md py-1 px-3 text-2xl text-gray-300">
                  5
                </div>
              </div>
              <div className="topanime-img flex items-center mr-3">
                <div className="rounded-md h-[90px] sm:h-[72px] sm:w-[46px] md:h-[90px] md:w-[58px] lg:h-[90px] lg:w-[58px] xl:h-[90px] xl:w-[58px]">
                  <img
                    src="/assets/images/one-piece.jpg"
                    className="object-cover rounded-md h-full w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="topanime-title text-white font-semibold text-base sm:text-xs md:text-sm xl:text-md">
                <div class="topanime-title-content mb-1.5">One Piece</div>
                <div className="flex items-center mr-6">
                  <div className="mr-2 text-gray-300 mt-0.5">
                    <i class="bx bxs-show "></i>
                  </div>
                  <div className="">50,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default TopAnime;
