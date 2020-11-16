import { useEffect, useState } from "react";
import httpClient from "../utils/axios";
import { getImgBaseUrl } from "../utils/utils";

const Carousel = ({ categoryTitle, apiUrl }) => {
  const [movies, setMovies] = useState([]);

  //Fetch data whenever the apiUrl changes
  useEffect(() => {
    async function fetchData() {
      let request = await httpClient.get(apiUrl); //wait until you get data from the TMDB
      setMovies(request.data.results); //fill movies with the data
      return request;
    }
    fetchData();
  }, [apiUrl]);

  return (
    <div className="category">
      <h2>{categoryTitle}</h2>
      <div className="carousel">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="movie-poster"
            src={
              movie.poster_path !== null
                ? `${getImgBaseUrl()}${movie.poster_path}`
                : ""
            }
            alt={movie?.title || movie?.name || movie?.originalName}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
