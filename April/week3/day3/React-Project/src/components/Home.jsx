import React from "react";
import {
  FaPlay,
  FaSearch,
  FaStar,
  FaFire,
  FaFilm,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto flex h-full flex-col-reverse items-center justify-center gap-8 px-6 py-6 lg:flex-row">
        {/* ================= LEFT ================= */}

        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-yellow-300">
            <FaFilm />
            Unlimited Movies & TV Shows
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Discover Your
            <span className="text-orange-500"> Next </span>
            <br />
            Favorite
            <span className="text-green-500"> Movie</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-300 lg:mx-0">
            Watch trending movies, explore top-rated shows, search your
            favourite actors, and build your own watchlist—all in one place.
          </p>

          {/* Search */}

          <div className="mx-auto mt-8 flex max-w-md overflow-hidden rounded-full bg-white shadow-xl lg:mx-0">
            <input
              type="text"
              placeholder="Search Movies..."
              className="w-full px-5 py-3 text-gray-700 outline-none"
            />

            <button className="bg-orange-500 px-6 text-white transition hover:bg-orange-600">
              <FaSearch />
            </button>
          </div>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-600">
              <FaPlay />
              Watch Now
            </button>

            <button className="flex items-center gap-2 rounded-full border-2 border-green-500 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white">
              Browse
              <FaArrowRight />
            </button>
          </div>

          {/* Statistics */}

          <div className="mt-10 flex justify-center gap-8 lg:justify-start">
            <div>
              <h2 className="text-3xl font-bold text-orange-500">10K+</h2>

              <p className="text-gray-400">Movies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-400">500+</h2>

              <p className="text-gray-400">Shows</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-500">1M+</h2>

              <p className="text-gray-400">Users</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-orange-500/20 blur-3xl"></div>

            <div className="absolute -right-6 bottom-10 h-24 w-24 rounded-full bg-green-500/20 blur-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600"
              alt="Movie"
              className="w-64 rounded-3xl border border-white/10 shadow-2xl md:w-72 lg:w-80"
            />

            {/* Rating */}
            <div className="absolute left-3 top-3 rounded-xl bg-black/70 px-3 py-2 backdrop-blur">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold text-white">8.9</span>
              </div>
            </div>
            {/* Trending Card */}

            <div className="absolute -right-5 bottom-20 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md shadow-xl">
              <FaFire className="mx-auto text-2xl text-yellow-400" />

              <p className="mt-2 text-center text-sm font-semibold text-white">
                Trending
              </p>
            </div>

            {/* Genre Card */}

            <div className="absolute bottom-5 left-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              Action • Adventure
            </div>

            {/* Watch Button */}

            <button className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-xl transition duration-300 hover:scale-105">
              <FaPlay />
              Play Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
