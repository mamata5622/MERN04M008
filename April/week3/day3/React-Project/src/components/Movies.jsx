import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios'
import { toast } from 'react-toastify';


const MOVIE_API = import.meta.env.VITE_OMDB_API;
const FULL_API = MOVIE_API + import.meta.env.VITE_OMDB_API_KEY;
function Movies() {
  // console.log(FULL_API);
  const [movies, setMovies] = useState([]);
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  
  const[search,setSearch]=useState()


  async function getMovies(searchData = "all") {
    try {
      setLoading(true)
      const res = await axios.get(FULL_API+`&s=${searchData}`);
      setMovies(res.data.Search);
    } catch (error) {
      toast.error("failed to fetch");
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSearch()
  }, [])

  function handleSearch(){
    getMovies(search)
  }
  return (
    <div className='w-full mx-auto absolute'>
      <img src="https://getwallpapers.com/wallpaper/full/6/2/e/1267879-movie-poster-wallpaper-1920x1080-for-hd.jpg" alt="" className="absolute"/>
      <div className='space-x-1 mt-25 absolute flex w-full pl-2 text-white'>
        <input
          type="search"
          placeholder='Search a movie'
          className='w-[90%] border p-3 rounded-md'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className='p-3 bg-gray-700/70 rounded-md' onClick={handleSearch}>Search</button>
      </div>
      <div className="absolute mt-35">
        {loading ?
        (<p>Loading......</p>) :
        (
          <div className='grid grid-cols-4 gap-3 mt-20'>
            {
              movies?.map((movie) => (
                <div className='p-2 shadow-xs' key={movie.imdbID}>
                  <div className=''>
                    <img src={movie.Poster} alt={movie.Title} className='h-full hover:scale-105 cursor-pointer transition duration-700' />
                  </div>
                  <p>Title : {movie.Title}</p>
                  <p>Type :{movie.Type}</p>
                  <p>Year :{movie.Year}</p>
                  <div className='text-center'>
                    <button
                      onClick={() => navigate(`/movie/${movie.imdbID}`)}
                      className=' w-full p-2 bg-amber-700 text-white rounded-xl hover:bg-amber-300 cursor-pointer'>View Detail</button>
                  </div>
                </div>
              ))
            }
          </div>)
      }
      </div>
      
    </div>
  )
}

export default Movies;
