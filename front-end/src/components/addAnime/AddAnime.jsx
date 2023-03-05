import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import FormData from "form-data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnime = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("test");
  const [image, setImage] = useState("test");
  const [status, setStatus] = useState("");
  const [episodeCount, setEpisodeCount] = useState("");
  const [airedFrom, setAiredFrom] = useState("");
  const [airedTo, setAiredTo] = useState("");
  const [studio, setStudio] = useState("");
  const [director, setDirector] = useState("");
  const [writer, setWriter] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [criticScore, setCriticScore] = useState("");
  const [userScore, setUserScore] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("status", status);
    formData.append("episode_count", episodeCount);
    formData.append("aired_from", airedFrom);
    formData.append("aired_to", airedTo);
    formData.append("studio", studio);
    formData.append("director", director);
    formData.append("writer", writer);
    formData.append("genre", genre);
    formData.append("rating", rating);
    formData.append("critic_score", criticScore);
    formData.append("user_score", userScore);
    formData.append("image", image);
    formData.append("cover_image", coverImage);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/animes",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/animes");
    } catch (error) {
      setErrorMessage("Une erreur s'est produite lors de l'ajout de l'anime.");
    }
  };

  const handleCoverImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className=" anime-container px-0 2xl:px-16">
      <div className="container mx-auto">
        <Navbar />
        <div>
          <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              <div>
                <label
                  for="anime_title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="anime_title"
                  id="anime_title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="anime_image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="anime_image"
                  type="file"
                  accept="image/*"
                  name="anime_image"
                  required=""
                  onChange={handleImageChange}
                />
              </div>
              <div>
                <label
                  for="anime_cover_image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cover Image
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="anime_cover_image"
                  type="file"
                  accept="image/*"
                  name="anime_cover_image"
                  required=""
                  onChange={handleCoverImageChange}
                ></input>
              </div>
              <div>
                <label
                  for="status"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <select
                  id="status"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="">Choose a status</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div>
                <label
                  for="episode_count"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number Of Episodes
                </label>
                <input
                  type="number"
                  name="episode_count"
                  id="episode_count"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={episodeCount}
                  onChange={(e) => setEpisodeCount(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="aired_from"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Aired From
                </label>
                <input
                  type="text"
                  name="aired_from"
                  id="aired_from"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={airedFrom}
                  onChange={(e) => setAiredFrom(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="aired_to"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Aired To
                </label>
                <input
                  type="text"
                  name="aired_to"
                  id="aired_to"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={airedTo}
                  onChange={(e) => setAiredTo(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="studio"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Studio
                </label>
                <input
                  type="test"
                  name="studio"
                  id="studio"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={studio}
                  onChange={(e) => setStudio(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="director"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Director
                </label>
                <input
                  type="text"
                  name="director"
                  id="director"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="writer"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Writer
                </label>
                <input
                  type="text"
                  name="writer"
                  id="writer"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={writer}
                  onChange={(e) => setWriter(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="genre"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Genre
                </label>
                <select
                  id="genre"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option selected>Choose a genre</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="School">School</option>
                  <option value="Power">Power</option>
                </select>
              </div>
              <div>
                <label
                  for="rating"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  id="rating"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="story"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Story
                </label>
                <textarea
                  id="story"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write the anime story here..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add new anime
            </button>
            <div class="text-center">
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{errorMessage}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAnime;
