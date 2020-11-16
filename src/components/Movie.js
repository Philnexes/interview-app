import { useEffect } from "react";
import { getImgBaseUrl } from "../utils/utils";

const Movie = ({ movie, setShowDetail }) => {
  return (
    <img
      onClick={() => setShowDetail(true)}
      className="movie-poster"
      src={
        movie.poster_path !== null
          ? `${getImgBaseUrl()}${movie.poster_path}`
          : ""
      }
      alt={movie?.title || movie?.name || movie?.originalName}
    />
  );
};

export default Movie;
