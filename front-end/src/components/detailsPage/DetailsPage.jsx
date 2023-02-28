import React from "react";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const CustomNav = ({ onNextClick, onPrevClick }) => {
  return (
    <div className="custom-nav flex">
      <div
        className="py-0.5 px-3 border border-slate-500 rounded-lg hover:bg-slate-700 cursor-pointer"
        onClick={onPrevClick}
      >
        <i class="bx bx-left-arrow-alt text-white font-bold text-lg"></i>
      </div>
      <div
        className="py-0.5 px-3 border border-slate-500 rounded-lg ml-3 hover:bg-slate-700 cursor-pointer"
        onClick={onNextClick}
      >
        <i class="bx bx-right-arrow-alt text-white font-bold text-lg"></i>
      </div>
    </div>
  );
};

const DetailsPage = () => {
  const carouselRef = React.useRef();

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    if (performance.navigation.type === 1) {
      // If the page has been reloaded
      setItemsToShow(5); // show 6 items on reload
    }
  }, []);

  const swiper_options = {
    items: { itemsToShow },
    loop: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      640: {
        items: 3,
      },
      768: {
        items: 4,
      },
      1024: {
        items: 4,
      },
      1280: {
        items: 6,
      },
      1536: {
        items: 6,
      },
    },
    navElement: () => (
      <CustomNav onNextClick={handleNextClick} onPrevClick={handlePrevClick} />
    ),
  };

  const options = {
    speed: 500,
    max: 30,
  };
  return (
    <div className="detailspage-container">
      <div class="detailspage-bg relative h-52 md:h-64 lg:h-80 xl:h-[350px] w-full image-with-gradient2 hidden sm:block">
        <img
          src="/assets/images/bg_peakpx.jpg"
          className="object-cover w-full h-full rounded-lg"
          alt=""
        />
      </div>
      <div className=" detailspage-content relative text-white mt-[0px] sm:mt-[-60px] md:mt-[-86px] z-10  text-white px-0 lg:px-16">
        <div>
          <div className="flex flex-col xl:flex-row mb-6">
            <div class="grid grid-cols-12">
              <div class="col-span-12 lg:col-span-3">
                <div className="flex items-center justify-center lg:block object-cover rounded-lg mb-6">
                  <div>
                    <img
                      src="/assets/images/aot.jpg"
                      className="object-cover w-36 h-[220px] sm:w-[142px] md:w-[160px] md:h-[246px] lg:w-[80%] lg:h-full xl:w-[70%] xl:h-full rounded-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 lg:col-span-9 detailspage-info">
                <div className="detailspage-title text-center lg:text-left text-2xl md:text-4xl font-semibold mb-6">
                  Attack On Titan Season 4
                </div>
                <div className="detailspage-category flex justify-center lg:justify-start mb-6 text-md md:text-base ">
                  <div className="py-2 px-3 rounded-lg border border-slate-500 mr-4">
                    Adventure
                  </div>
                  <div className="py-2 px-3 rounded-lg border border-slate-500 mr-4">
                    Drama
                  </div>
                  <div className="py-2 px-3 rounded-lg border border-slate-500">
                    Action
                  </div>
                </div>
                <div className="detailspage-story text-center lg:text-left text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base  mb-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Enim, iure quas? Ipsa, rerum nesciunt. Consectetur quidem
                  dolore laboriosam optio saepe magnam veritatis est cumque
                  pariatur tempore quasi cum numquam ratione, enim molestiae non
                  eaque voluptates libero nihil veniam incidunt hic. Aperiam eos
                  sequi aliquam nulla ducimus porro nemo, perferendis enim?
                </div>
                <div className="detailspage-options flex justify-center lg:justify-start">
                  <div className="flex items-center py-2 px-6 bg-slate-500 rounded-lg mr-4 hover:bg-slate-700 cursor-pointer">
                    <div className="mr-3">
                      <i class="bx bx-play font-bold text-xl"></i>
                    </div>
                    <div>Trailer</div>
                  </div>
                  <div className=" border border-slate-500 flex items-center rounded-lg mr-4 py-2 px-4 hover:bg-slate-700 cursor-pointer">
                    <i class="bx bx-plus"></i>
                  </div>
                  <div className=" border border-red-700 flex items-center rounded-lg mr-4 py-2 px-4 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer">
                    <i class="bx bxs-heart font-bold text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-2xl font-semibold mb-4">Main caracters</div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 text-white">
              <div className="flex mb-3 p-2 rounded-lg bg-slate-500">
                <div className="mr-3">
                  <div className="rounded-md w-14 h-[70px]">
                    <img
                      src="/assets/caracters/eren.jpg"
                      className="object-cover rounded-md w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3-name mb-1">
                  <div class=" text-white font-medium">Eren Jager</div>
                </div>
              </div>
              <div className="flex mb-3 p-2 rounded-lg bg-slate-500">
                <div className="mr-3">
                  <div className="rounded-md w-14 h-[70px]">
                    <img
                      src="/assets/caracters/mikasa.jpg"
                      className="object-cover rounded-md w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3-name mb-1">
                  <div class=" text-white font-medium">Mikasa Ackerman</div>
                </div>
              </div>
              <div className="flex mb-3 p-2 rounded-lg bg-slate-500">
                <div className="mr-3">
                  <div className="rounded-md w-14 h-[70px]">
                    <img
                      src="/assets/caracters/armin.jpeg"
                      className="object-cover rounded-md w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3-name mb-1">
                  <div class=" text-white font-medium">Armin Alret</div>
                </div>
              </div>
              <div className="flex mb-3 p-2 rounded-lg bg-slate-500">
                <div className="mr-3">
                  <div className="rounded-md w-14 h-[70px]">
                    <img
                      src="/assets/caracters/levi.jpg"
                      className="object-cover rounded-md w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3-name mb-1">
                  <div class=" text-white font-medium">Levi Ackerman</div>
                </div>
              </div>
              <div className="flex mb-3 p-2 rounded-lg bg-slate-500">
                <div className="mr-3">
                  <div className="rounded-md w-14 h-[70px]">
                    <img
                      src="/assets/caracters/erwin.jpg"
                      className="object-cover rounded-md w-full h-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mb-3-name mb-1">
                  <div class=" text-white font-medium">Erwin Smith</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex justify-between mb-4">
              <div className="text-2xl font-semibold ">Related Animes</div>
              <div>
                <CustomNav
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
                />
              </div>
            </div>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"></div> */}

            <OwlCarousel ref={carouselRef} {...swiper_options}>
              <div className="item">
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
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">
                            Dragon Ball Super
                          </div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">84%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="item">
                <Tilt options={options}>
                  <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
                    <div className="trending-card rounded-lg">
                      <div>
                        <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                          <img
                            src="/assets/images/dororo.webp"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">Dororo</div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="item">
                <Tilt options={options}>
                  <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
                    <div className="trending-card rounded-lg">
                      <div>
                        <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                          <img
                            src="/assets/images/bokunohero.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">
                            My Hero Academy
                          </div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>

              <div className="item">
                <Tilt options={options}>
                  <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
                    <div className="trending-card rounded-lg">
                      <div>
                        <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                          <img
                            src="/assets/images/parasyte.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">
                            Parasyte
                          </div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="item">
                <Tilt options={options}>
                  <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
                    <div className="trending-card rounded-lg">
                      <div>
                        <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                          <img
                            src="/assets/images/shieldhero.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">
                            Shield Hero
                          </div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="item">
                <Tilt options={options}>
                  <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
                    <div className="trending-card rounded-lg">
                      <div>
                        <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                          <img
                            src="/assets/images/hellsing.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">
                            Hellsing
                          </div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">90%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
              <div className="item">
                <Tilt options={options}>
                  <div className="trending-content flex justify-center rounded-lg mb-3 cursor-pointer ">
                    <div className="trending-card rounded-lg">
                      <div>
                        <div className="trending-img w-36 h-[220px] sm:w-[144px] sm:h-[212px] md:w-40 md:h-[236px] lg:w-44 lg:h-[264px] xl:w-[144px] xl:h-[216px] 2xl:w-40 2xl:h-[240px]">
                          <img
                            src="/assets/images/owarinoseraph.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="trending-info w-full mt-2">
                          <div className="title text-sm md:text-md">
                            Owari No Seraph
                          </div>
                        </div>
                        <div className="trending-rating bottom-section flex items-center text-white mt-1">
                          <i class="bx bxs-star mr-2 text-xl text-orange-500"></i>
                          <div className="text-gray-300 text-sm">77%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
