import { useState } from "react";
import Modal from "react-responsive-modal";
import { getImgBaseUrl } from "../utils/utils";
import TrailerPopup from "./TrailerPopup";

const DetailDialog = ({ showDetail, closeDetail, movieDetail }) => {
  const [playTrailer, setPlayTrailer] = useState(false);

  let moviePosterPath = movieDetail?.poster_path
    ? `${getImgBaseUrl()}${movieDetail.poster_path}`
    : "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg";
  let movieTitle =
    movieDetail?.title || movieDetail?.name || movieDetail?.originalName;

  const handlePlay = () => {
    setPlayTrailer(true);
  };

  return (
    <Modal
      open={showDetail}
      onClose={closeDetail}
      center
      classNames={{ modal: "modal-detail" }}
    >
      <Detail
        movieTitle={movieTitle}
        movieDetail={movieDetail}
        handlePlay={handlePlay}
        moviePosterPath={moviePosterPath}
      />
      <TrailerPopup playTrailer={playTrailer} setPlayTrailer={setPlayTrailer} />
    </Modal>
  );
};

const Detail = ({ movieTitle, movieDetail, handlePlay, moviePosterPath }) => {
  return (
    <div className="modal-content">
      <div className="movie-overview">
        <h2 className="title">{movieTitle}</h2>
        <p className="overview">{movieDetail?.overview}</p>
        <div className="play-button-container">
          <button onClick={handlePlay} className="play-button">
            Play trailer
          </button>
        </div>
      </div>

      <div className="thumbnail-container">
        <img className="thumbnail" src={moviePosterPath} alt="Obrazek" />
      </div>
    </div>
  );
};

export default DetailDialog;
