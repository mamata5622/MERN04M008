import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import {
  FaArrowLeft,
  FaStar,
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaLanguage,
  FaFilm,
  FaUserTie,
} from "react-icons/fa";

const MOVIE_API = import.meta.env.VITE_OMDB_API;
const FULL_API = MOVIE_API + import.meta.env.VITE_OMDB_API_KEY;

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  async function getMovie() {
    try {
      setLoading(true);

      const res = await axios.get(
        FULL_API + `&i=${id}`
      );

      setMovie(res.data);
    } catch (error) {
      toast.error("Unable to load movie.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovie();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 rounded-lg border border-orange-500 px-5 py-2 text-orange-400 transition hover:bg-orange-500 hover:text-white"
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="grid gap-10 lg:grid-cols-3">
                    {/* Poster */}

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">

            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/500x750?text=No+Poster"
              }
              alt={movie.Title}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Movie Details */}

          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <div className="flex flex-wrap items-center justify-between gap-4">

              <h1 className="text-4xl font-bold text-white">
                {movie.Title}
              </h1>

              <div className="flex items-center gap-2 rounded-full bg-yellow-500/20 px-5 py-2">

                <FaStar className="text-yellow-400" />

                <span className="font-semibold text-yellow-300">
                  {movie.imdbRating}/10
                </span>

              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-4">

              <span className="rounded-full bg-orange-500/20 px-4 py-2 text-orange-400">
                🎬 {movie.Type}
              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                {movie.Genre}
              </span>

              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-300">
                {movie.Rated}
              </span>

            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">

                <FaCalendarAlt className="text-orange-500" />

                <div>

                  <p className="text-gray-400">
                    Released
                  </p>

                  <h3 className="font-semibold text-white">
                    {movie.Released}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">

                <FaClock className="text-green-500" />

                <div>

                  <p className="text-gray-400">
                    Runtime
                  </p>

                  <h3 className="font-semibold text-white">
                    {movie.Runtime}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">

                <FaGlobe className="text-yellow-400" />

                <div>

                  <p className="text-gray-400">
                    Country
                  </p>

                  <h3 className="font-semibold text-white">
                    {movie.Country}
                  </h3>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-4">

                <FaLanguage className="text-blue-400" />

                <div>

                  <p className="text-gray-400">
                    Language
                  </p>

                  <h3 className="font-semibold text-white">
                    {movie.Language}
                  </h3>

                </div>

              </div>

            </div>

            <div className="mt-8"></div>
                          <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-white">
                <FaFilm className="text-orange-500" />
                Storyline
              </h2>

              <p className="leading-8 text-gray-300">
                {movie.Plot}
              </p>
            </div>

            {/* Director */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white/5 p-5">

                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-orange-400">
                  <FaUserTie />
                  Director
                </h3>

                <p className="text-gray-300">
                  {movie.Director}
                </p>

              </div>

              <div className="rounded-2xl bg-white/5 p-5">

                <h3 className="mb-2 text-xl font-semibold text-green-400">
                  🎭 Actors
                </h3>

                <p className="text-gray-300">
                  {movie.Actors}
                </p>

              </div>

            </div>

            {/* Extra Information */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl bg-white/5 p-5">

                <h3 className="mb-2 text-xl font-semibold text-yellow-400">
                  🏆 Awards
                </h3>

                <p className="text-gray-300">
                  {movie.Awards}
                </p>

              </div>

              <div className="rounded-2xl bg-white/5 p-5">

                <h3 className="mb-2 text-xl font-semibold text-orange-400">
                  ✍ Writer
                </h3>

                <p className="text-gray-300">
                  {movie.Writer}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

  
  );
}

export default Movie;