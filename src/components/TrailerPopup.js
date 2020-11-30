import VideoPlayer from "./VideoPlayer";
import { Modal } from "react-responsive-modal";

//a component that will just throw a trailer popup in a modal window
//this component includes a Video Player component, that holds the video element and is autplayed on mounting + starts in fullscreen mode
const TrailerPopup = ({ playTrailer, setPlayTrailer }) => {
  const handleClose = () => {
    setPlayTrailer(false);
  };

  return (
    <Modal
      open={playTrailer}
      onClose={handleClose}
      center
      classNames={{ modal: "video-player-window" }}
    >
      <div className="video-player">
        <VideoPlayer />
      </div>
    </Modal>
  );
};

export default TrailerPopup;
