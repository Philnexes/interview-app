import { useState } from "react";
import Modal from "react-responsive-modal";
import { getMovieTitle, getPosterPath } from "../utils/utils";
import TrailerPopup from "./TrailerPopup";

//a modal window that is being shown on movie click in carousel
//the window shows basic overview of the movie, title, poster and a play button to launch the playback of the trailer (hardcoded video stream for the purposes of this application)
const DetailDialog = ({ showDetail, closeDetail, movieDetail }) => {
  const [playTrailer, setPlayTrailer] = useState(false);

  //get movie posterpath and title (from utils, implements null check)
  let moviePosterPath = getPosterPath(movieDetail?.poster_path);
  let movieTitle = getMovieTitle(movieDetail);

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
