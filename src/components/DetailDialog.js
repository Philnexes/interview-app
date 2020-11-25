import { useState } from "react";
import { getImgBaseUrl } from "../utils/utils";
import VideoPlayer from "./VideoPlayer";

const DetailDialog = ({ movieDetail }) => {
  const [playTrailer, setPlayTrailer] = useState(true);

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
      <div className="video-player">{playTrailer && <VideoPlayer />}</div>

      {/* <div className="movie-overview">
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
      </div> */}
    </div>
  );
};

export default DetailDialog;
