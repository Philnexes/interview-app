import VideoPlayer from "./VideoPlayer";
import { Modal } from "react-responsive-modal";

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
