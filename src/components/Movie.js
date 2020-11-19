import { useEffect } from "react";
import { getImgBaseUrl } from "../utils/utils";

const Movie = ({ movie, setShowDetail, setMovieDetail }) => {
  let moviePosterPath = movie?.poster_path
    ? `${getImgBaseUrl()}${movie.poster_path}`
    : "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";
  let movieTitle = movie?.title || movie?.name || movie?.originalName;

  const handleClick = () => {
    setShowDetail(true);
    setMovieDetail(movie);
  };

  return (
    <img
      onClick={handleClick}
      className="movie-poster"
      src={moviePosterPath}
      alt={movieTitle}
    />
  );
};

export default Movie;
