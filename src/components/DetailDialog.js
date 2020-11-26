import { useState } from "react";
import { getImgBaseUrl } from "../utils/utils";
import VideoPlayer from "./VideoPlayer";
import { Modal } from "react-responsive-modal";

const DetailDialog = ({ movieDetail }) => {
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

      <Modal
        open={playTrailer}
        onClose={() => {
          setPlayTrailer(false);
        }}
        center
        classNames={{ modal: "video-player-window" }}
      >
        <div className="video-player">
          <VideoPlayer />
        </div>
      </Modal>
    </div>
  );
};

export default DetailDialog;
