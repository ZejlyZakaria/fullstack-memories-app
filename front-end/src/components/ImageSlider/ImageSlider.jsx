import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imageSlider.css";
// import $ from "jquery";

const ImageSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="mb-6">
      <Slider {...settings} className="slider">
      <div className="rounded-lg">
          <div class=" relative w-full sm:h-40 md:h-48 lg:h-64 xl:h-80">
            <img
              src="/assets/images/anime_bg.jpg"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            {/* <div className="img-slider-info w-full md:w-1/2 ml-2 md:ml-6">
              <div className="img-slider-info-title text-white font-bold text-3xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl mb-6">
                Demon Slayer
              </div>
              <div className="buttons flex">
                <div className="watch-button mr-6 text-white px-3 py-1 md:px-4 md:py-2 bg-red-600 rounded-md font-semibold text-md md:text-lg">
                  Watch
                </div>
                <div className="details-button text-white px-3 py-1 md:px-4 md:py-2 bg-transparent border-solid border-2 border-white rounded-md font-semibold text-md md:text-lg">
                  Details
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="rounded-lg">
          <div class=" relative w-full sm:h-40 md:h-48 lg:h-64 xl:h-80 image-with-gradient-right rounded-lg p-2 bg-slate-700">
            <img
              src="/assets/images/onepiece_bg.jpg"
              alt=""
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="img-slider-info w-full md:w-1/2 ml-2 md:ml-6">
              <div className="img-slider-info-title text-white font-bold text-3xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl mb-6">
                One Piece
              </div>
              <div className="buttons flex">
                <div className="watch-button mr-6 text-white px-3 py-1 md:px-4 md:py-2 bg-red-600 rounded-md font-semibold text-md md:text-lg">
                  Watch
                </div>
                <div className="details-button text-white px-3 py-1 md:px-4 md:py-2 bg-transparent border-solid border-2 border-white rounded-md font-semibold text-md md:text-lg">
                  Details
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
