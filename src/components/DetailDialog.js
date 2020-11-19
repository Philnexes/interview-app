import { getImgBaseUrl } from "../utils/utils";

const DetailDialog = ({ movieDetail }) => {
  let moviePosterPath = movieDetail?.poster_path
    ? `${getImgBaseUrl()}${movieDetail.poster_path}`
    : "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";
  let movieTitle =
    movieDetail?.title || movieDetail?.name || movieDetail?.originalName;

  return (
    <div className="modal-content">
      <div className="movie-overview">
        <h2 className="title">{movieTitle}</h2>
        <p className="overview">{movieDetail?.overview}</p>
        <div className="play-button-container">
          <button className="play-button">Play trailer</button>
        </div>
      </div>

      <div className="thumbnail-container">
        <img className="thumbnail" src={moviePosterPath} alt="Obrazek" />
      </div>
    </div>
  );
};

export default DetailDialog;
