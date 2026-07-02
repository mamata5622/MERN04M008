import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { FaSearch, FaFilm, FaPlay, FaCalendarAlt } from "react-icons/fa";

const MOVIE_API = import.meta.env.VITE_OMDB_API;
const FULL_API = MOVIE_API + import.meta.env.VITE_OMDB_API_KEY;

function Movies() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("Marvel");

  async function getMovies(searchData = "Marvel") {
    try {
      setLoading(true);

      const res = await axios.get(FULL_API + `&s=${searchData}`);

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
        toast.error("Movie Not Found");
      }
    } catch (error) {
      toast.error("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = () => {
    getMovies(search);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero */}

      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl mt-15">
            <span className="text-orange-500 ">Discover</span> Amazing Movies
          </h1>

          <p className="mt-3 text-gray-400">
            Search your favourite movies from thousands of titles.
          </p>
        </div>

        {/* Search */}

        <div className="mx-auto mt-10 flex max-w-2xl overflow-hidden rounded-full bg-white shadow-2xl">
          <input
            type="search"
            placeholder="Search Movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-4 text-black outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 px-8 text-white transition hover:bg-orange-600"
          >
            <FaSearch />
          </button>
        </div>

        {/* Movie Grid */}

        <div className="mt-12">
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-14 w-14 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {movies.map((movie) => (
                <div
                  key={movie.imdbID}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-orange-500/30"
                >
                  {/* Poster */}

                  <div className="relative overflow-hidden">
                    <img
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "https://via.placeholder.com/300x450?text=No+Image"
                      }
                      alt={movie.Title}
                      className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition duration-500 group-hover:opacity-100">
                      <button
                        onClick={() => navigate(`/movie/${movie.imdbID}`)}
                        className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                      >
                        <FaPlay />
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="space-y-3 p-5">
                    <h2 className="line-clamp-1 text-xl font-bold text-white">
                      {movie.Title}
                    </h2>

                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                        {movie.Type}
                      </span>

                      <span className="flex items-center gap-2 text-yellow-400">
                        <FaCalendarAlt />
                        {movie.Year}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate(`/movie/${movie.imdbID}`)}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 py-3 font-semibold text-white transition duration-300 hover:scale-105"
                    >
                      <FaFilm />
                      View Movie
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
