import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";
import "../../assets/css/card-img.css";
import animes_bg from "../../assets/images/hxh.webp";
import movies_bg from "../../assets/images/bg-jhon-wick.jpg";
import tvShow_bg from "../../assets/images/bg-breaking-bad.jpg";

const Welcome = () => {
  return (
    <div className="user-categories-page">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
        <div className="categorie-card">
          <div class="card-img">
            <img src={animes_bg} loading="lazy" alt="" />
          </div>
          <div class="card-disc">
            <div class="card-disc-title">Animes Category</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            consequatur officiis adipisci error deleniti repellendus suscipit
            deserunt amet facilis soluta? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsum rem veniam labore unde placeat similique
            quia
          </div>
          <div class="footer">
            <div class="footer-btn">
              <Link to="/animes">
                <button
                  type="button"
                  class="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded"
                >
                  Entrer
                </button>
              </Link>
            </div>
            <div class="footer-info" id="movies">
              <i class="bx bx-info-circle"></i>
            </div>
          </div>
        </div>

        <div className="categorie-card">
          <div class="card-img">
            <img src={movies_bg} loading="lazy" alt="" />
          </div>
          <div class="card-disc">
            <div class="card-disc-title">Movie Category </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            consequatur officiis adipisci error deleniti repellendus suscipit
          </div>
          <div class="footer">
            <div class="footer-btn">
              <button
                type="button"
                class="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded"
              >
                Enter
              </button>
            </div>
            <div class="footer-info" id="movies">
              <i class="bx bx-info-circle"></i>
            </div>
          </div>
        </div>

        <div className="categorie-card">
          <div class="card-img">
            <img src={tvShow_bg} loading="lazy" alt="" />
          </div>
          <div class="card-disc">
            <div class="card-disc-title">Tv Show Category </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            consequatur officiis adipisci error deleniti repellendus suscipit
          </div>
          <div class="footer">
            <div class="footer-btn">
              <button
                type="button"
                class="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded"
              >
                Enter
              </button>
            </div>
            <div class="footer-info" id="movies">
              <i class="bx bx-info-circle"></i>
            </div>
          </div>
        </div>

        <div className="categorie-card">
          <div class="add-card-icon">
            <i class="bx bx-plus"></i>
          </div>
          <div class="card-disc">
            <div class="card-disc-title">Add New Category </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            consequatur officiis adipisci error deleniti repellendus suscipit
          </div>
          <div class="footer">
            <div class="footer-btn">
              <button
                type="button"
                class="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded"
              >
                Enter
              </button>
            </div>
            <div class="footer-info" id="movies">
              <i class="bx bx-info-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
