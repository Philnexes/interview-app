import { getMovieTitle, getPosterPath } from "../utils/utils";

//a component that holds a specific movie that is fetched from the API
const Movie = ({ movie, setShowDetail, setMovieDetail }) => {
  let moviePosterPath = getPosterPath(movie?.poster_path);
  let movieTitle = getMovieTitle(movie);

  //If you click on a poster, set the state of showing detail to true and set a specific movie to be shown in the detail dialog (from App.js)
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
