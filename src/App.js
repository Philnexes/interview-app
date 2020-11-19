import "./styles/app.scss";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import DetailDialog from "./components/DetailDialog";
import requests from "./utils/requests";
import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";

function App() {
  const [showDetail, setShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState(null);

  const closeDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="App">
      <Nav />
      <Modal
        open={showDetail}
        onClose={closeDetail}
        center
        classNames={{ modal: "modal-detail" }}
      >
        <DetailDialog movieDetail={movieDetail} />
      </Modal>
      <Carousel
        categoryTitle="Popular movies"
        apiUrl={requests.fetchTrendingMovies}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      {/* <Carousel
        categoryTitle="Popular series"
        apiUrl={requests.fetchTrendingSeries}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      <Carousel
        categoryTitle="Family"
        apiUrl={requests.fetchDiscoverMoviesFamily}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      />
      <Carousel
        categoryTitle="Documentary"
        apiUrl={requests.fetchDiscoverMoviesDocumentary}
        setShowDetail={setShowDetail}
        setMovieDetail={setMovieDetail}
      /> */}
    </div>
  );
}

export default App;
