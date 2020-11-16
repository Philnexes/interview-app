import { getImgBaseUrl } from "../utils/utils";

const Movie = ({ movie }) => {
  return (
    <img
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
