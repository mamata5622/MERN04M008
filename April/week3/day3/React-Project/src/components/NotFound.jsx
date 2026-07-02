import React from "react";
import { Link } from "react-router";
import { FaFilm, FaHome, FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-6">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-500/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-xl">

        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 shadow-xl">

          <FaFilm className="animate-bounce text-5xl text-white" />

        </div>

        {/* 404 */}
        <h1 className="mt-8 text-8xl font-extrabold text-orange-500">
          404
        </h1>

        <h2 className="mt-3 flex items-center justify-center gap-3 text-3xl font-bold text-white">
          <FaExclamationTriangle className="text-yellow-400" />
          Page Not Found
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-300">
          Oops! The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring amazing movies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/movies"
            className="rounded-xl border border-orange-500 px-8 py-3 font-semibold text-orange-400 transition duration-300 hover:bg-orange-500 hover:text-white"
          >
            Browse Movies
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-white/10 pt-6">

          <p className="text-gray-400">
            🎬 Movie<span className="font-bold text-orange-500">Verse</span> —
            Discover • Watch • Enjoy
          </p>

        </div>

      </div>

    </div>
  );
}

export default NotFound;