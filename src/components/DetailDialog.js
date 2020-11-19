import { getImgBaseUrl } from "../utils/utils";

const DetailDialog = ({ movieDetail }) => {
  let moviePosterPath = movieDetail?.poster_path
    ? `${getImgBaseUrl()}${movieDetail.poster_path}`
    : "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";
  let movieTitle =
    movieDetail?.title || movieDetail?.name || movieDetail?.originalName;

  return (
    <div className="modal-content">
      <span className="title-overview">
        <h2>{movieTitle}</h2>
        <p>{movieDetail?.overview}</p>
      </span>

      <span className="thumbnail-container">
        <img className="thumbnail" src={moviePosterPath} alt="Obrazek" />
      </span>
    </div>
  );
};

export default DetailDialog;
